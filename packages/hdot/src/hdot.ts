
import { isTemplateParam, rawTemplate } from "./utils";
import type { Plugin, HTML } from "./types";

class PrivateState {
  private _plugins: Plugin[] = [];
}

type H = typeof PrivateState & HTML;

export const h: H = new Proxy(new PrivateState() as unknown as H, {
  get(target, key, reciever) {
    if (typeof key !== "string" || key === "toString" || key.startsWith("#")) {
      return Reflect.get(target, key, reciever);
    }
    return new Hdot(key, target);
  },
});

class Hdot extends Function {
  private tagName: string;
  private htmlString: string = "";

  constructor(tagName, h: HTML) {
    super();
    this.tagName = tagName;
    this.htmlString = tagName + " ";

    const proxy = new Proxy(this, {
      get(target, key, reciever) {
        if (
          typeof key !== "string" ||
          key === "toString" ||
          key === "htmlString" ||
          key === "raw"
        ) {
          return Reflect.get(target, key, reciever);
        }
        return (args: any) => {
          let k = key;
          if (k === "className") {
            k = "class";
          }
          if (k.startsWith("data") && k.length > 4) {
            k = "data-" + k.slice(4);
          }
          k = k.toLowerCase();

          let a = args;
          for (const plugin of h['_plugins']) {
            if (plugin.attribute) {
              const [pluginKey, pluginArgs] = plugin.attribute(tagName, k, a);
              k = pluginKey;
              a = pluginArgs;
            }
          }
          target.htmlString += target.attribute(k, a);
          return proxy;
        };
      },
      apply: (target, _thisArg, args) => {
        return target.#call.call(target, ...args);
      },
    });
    return proxy;
  }

  attribute(key: string, value: any) {
    let attributeString = "";
    if (typeof value === "boolean") {
      attributeString = value ? `${key}` : "";
    } else {
      attributeString = `${key}${value ? `="${value}"` : ""}`;
    }
    return attributeString + " ";
  }

  toString(...children: any[]) {
    let args: string | any[] = children.join('');
    if (isTemplateParam(...children)) {
      args = [rawTemplate(children[0], ...children.slice(1))];
    }
    console.log('children in toString', args, children[0]?.raw, isTemplateParam(...children));
    return `<${this.htmlString.trim()}>${args}</${
      this.htmlString.split(" ")[0]
    }>`;
  }

  #call(...children: any[]) {
    // Check if this is being called as a tag function.
    let args: string | any[] = children;
    if (isTemplateParam(...children)) {
      args = [rawTemplate(children[0], ...children.slice(1))];
    }
    console.log('children in call', args);
    return this.toString(...children);
  }
}

export const setPlugins = (h: H, plugins: Plugin[]) => {
  h['_plugins'] = plugins;
};
