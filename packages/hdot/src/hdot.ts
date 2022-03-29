import { isTemplateParam, rawTemplate } from "./utils";
import type { HTMLElements } from "./types/html";

export type Plugin = {
  attribute?: (tagName: string, key: string, args: any) => [string, any];
};

class PrivateState {
  private _plugins: Plugin[] = [];
}

export const setPlugins = (h: H, plugins: Plugin[]) => {
  h["_plugins"] = plugins;
};

export type H = typeof PrivateState & HTMLElements;

export const h: H = new Proxy(new PrivateState() as unknown as H, {
  get(target, key, reciever) {
    if (typeof key !== "string" || key === "toString" || key.startsWith("#")) {
      return Reflect.get(target, key, reciever);
    }
    return new Hdot(key, target);
  },
});

const getAttributeName = (rawName) => {
  let name = rawName;
  if (name.length > 4 && (name.startsWith("data") || name.startsWith("aria"))) {
    name = name.slice(0, 4) + '-' + name.slice(4);
  }
  return name.toLowerCase();
}

class Hdot extends Function {
  private htmlString: string = "";

  constructor(tagName, h: HTMLElements) {
    super();
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
          let k = getAttributeName(key);

          let a = args;
          for (const plugin of h["_plugins"]) {
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
    let args: string | any[] = children.join("");
    if (isTemplateParam(...children)) {
      args = [rawTemplate(children[0], ...children.slice(1))];
    }
    return `<${this.htmlString.trim()}>${args}</${
      this.htmlString.split(" ")[0]
    }>`;
  }

  #call(...children: any[]) {
    let args: string | any[] = children;
    if (isTemplateParam(...children)) {
      args = [rawTemplate(children[0], ...children.slice(1))];
    }
    return this.toString(...children);
  }
}
