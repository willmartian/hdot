import type { ElementMap } from "./types/htmlSpecTypes";

export type HTMLElement<TagName extends keyof ElementMap> = {
  (...children: (ElementMap[TagName]['allowedChildren'])[]): string;
  children: (...children: string[]) => string;
  tagName: string;
  // change this to an object that is built, that is serialized properly by toString
  htmlString: string;
  [key: `data${string}`]: (val: string | boolean | number) => HTMLElement<TagName>;
} & ElementMap[TagName]

export type HTML = {
  [TagName in keyof ElementMap]-?: HTMLElement<TagName>;
} & {
  _plugins: Plugin[];
}

const initial = {
  _plugins: []
} as unknown as HTML;

export const h = new Proxy(initial, {
  get(target, key, reciever) {
    if (typeof key !== 'string' || key === 'toString' || key.startsWith('_')) {
      return Reflect.get(target, key, reciever);
    };
    return new Hdot(key as keyof ElementMap, target);
  }
});

class Hdot extends Function {
  tagName: string;
  htmlString: string = '';

  constructor(tagName: keyof ElementMap, h: HTML) {
    super();
    this.tagName = tagName;
    this.htmlString = tagName + ' ';

    const proxy = new Proxy(this, {
      get(target, key, reciever) {
        if (typeof key !== 'string' || key === 'toString' || key === 'htmlString') {
          return Reflect.get(target, key, reciever);
        };
        return (args: any) => {
          let k = key;
          if (k === 'className') {
            k = 'class';
          }
          if (k.startsWith('data') && k.length > 4) {
            k = 'data-' + k.slice(4);
          }
          k = k.toLowerCase();
          let a = args;
          for (const plugin of h._plugins) {
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
      }
    });
    return proxy;
  }

  attribute(key: string, value: any) {
    let attributeString = '';
    if (typeof value === 'boolean') {
      attributeString = value ? `${key}` : '';
    } else {
      attributeString = `${key}${value ? `="${value}"` : ''}`;
    }
    return attributeString + ' ';
  }

  toString(children: any[] = []) {
    return `<${this.htmlString.trim()}>${children.join('')}</${this.htmlString.split(' ')[0]}>`;
  }

  #call(...args: any[]) {
    return this.toString(args);
  }
}

export type Plugin = {
  attribute?: (tagName: string, key: string, args: any) => [string, any];
  // TODO
  serialize?: (tagName: string, args: any[]) => any[];
}

export const setPlugins = (h: HTML, plugins: Plugin[]) => {
  h._plugins = plugins;
}
