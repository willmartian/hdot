import {
  isTemplateParam,
  rawTemplate,
  keyIsOmitted,
} from "./utils";
import { BaseHTMLElements as HTMLElements, PluginArray, TreeNode } from "./types";

export const hdot = <CustomElements = {}>(plugins: PluginArray = []) => {
  return new Proxy({}, {
    get(target, key, reciever) {
      if (keyIsOmitted(key, "toString")) {
        return Reflect.get(target, key, reciever);
      }
      return new hdotElement(key, plugins);
    },
  }) as HTMLElements;
}

export const h = hdot();

class hdotElement extends Function {
  private treeNode: TreeNode;
  private defaultPlugins: PluginArray = [];

  constructor(tagName: string, plugins: PluginArray = []) {
    super();
    this.treeNode = {
      tag: tagName,
      attrs: {},
      content: [""],
    };
    this.defaultPlugins = plugins;

    const proxy = new Proxy(this, {
      get(target, key, reciever) {
        if (
          keyIsOmitted(key, "toString", "treeNode", "raw", "defaultPlugins")
        ) {
          return Reflect.get(target, key, reciever);
        }
        return (args: any) => {
          let name = key.toLowerCase();
          if (
            name.length > 4 &&
            (name.startsWith("data") || name.startsWith("aria"))
          ) {
            name = name.slice(0, 4) + "-" + name.slice(4);
          }
          target.treeNode.attrs[name] = args;
          return proxy;
        };
      },
      apply: (target, _thisArg, args) => {
        return target.#call.call(target, ...args);
      },
    });
    return proxy;
  }

  #call(...children: any[]) {
    let args: string | any[] = children;
    if (isTemplateParam(...children)) {
      args = [rawTemplate(children[0], ...children.slice(1))];
    }
    this.treeNode.content = [...args];
    return this;
  }

  /**
   * Converts the hdot tree to HTML.
   * @param plugins array of hdot plugins
   * @returns HTML string
   */
  toString(plugins?: PluginArray): string {
    const _plugins = plugins !== undefined ? plugins : this.defaultPlugins;
    let returnValue: string | TreeNode = this.treeNode;
    _plugins.forEach((plugin) => {
      /** @todo fix casting */
      returnValue = plugin(returnValue as TreeNode);
    });
    if (typeof returnValue === "string") {
      return returnValue;
    }

    const { tag, attrs, content } = returnValue;
    let htmlString = `<${tag}`;
    for (const key in attrs) {
      const value = attrs[key];
      let attributeString = "";
      if (typeof value === "boolean") {
        attributeString = value ? `${key}` : "";
      } else {
        attributeString = `${key}${value ? `="${value}"` : ""}`;
      }
      htmlString += " " + attributeString;
    }
    htmlString += `>${content.join("")}</${tag}>`;
    return htmlString;
  }
}
