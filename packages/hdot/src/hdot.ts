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

const h: H = new Proxy(new PrivateState() as unknown as H, {
  get(target, key, reciever) {
    if (typeof key !== "string" || key === "toString" || key.startsWith("#")) {
      return Reflect.get(target, key, reciever);
    }
    return new Hdot(key, target);
  },
});


export default h;

// --- HTML Elements ---
export const a: typeof h['a'] = h.a;
export const abbr: typeof h['abbr'] = h.abbr;
export const address: typeof h['address'] = h.address;
export const area: typeof h['area'] = h.area;
export const article: typeof h['article'] = h.article;
export const aside: typeof h['aside'] = h.aside;
export const audio: typeof h['audio'] = h.audio;
export const b: typeof h['b'] = h.b;
export const base: typeof h['base'] = h.base;
export const bdi: typeof h['bdi'] = h.bdi;
export const bdo: typeof h['bdo'] = h.bdo;
export const blockquote: typeof h['blockquote'] = h.blockquote;
export const body: typeof h['body'] = h.body;
export const br: typeof h['br'] = h.br;
export const button: typeof h['button'] = h.button;
export const canvas: typeof h['canvas'] = h.canvas;
export const caption: typeof h['caption'] = h.caption;
export const cite: typeof h['cite'] = h.cite;
export const code: typeof h['code'] = h.code;
export const col: typeof h['col'] = h.col;
export const colgroup: typeof h['colgroup'] = h.colgroup;
export const data: typeof h['data'] = h.data;
export const datalist: typeof h['datalist'] = h.datalist;
export const dd: typeof h['dd'] = h.dd;
export const del: typeof h['del'] = h.del;
export const details: typeof h['details'] = h.details;
export const dfn: typeof h['dfn'] = h.dfn;
export const dialog: typeof h['dialog'] = h.dialog;
export const div: typeof h['div'] = h.div;
export const dl: typeof h['dl'] = h.dl;
export const dt: typeof h['dt'] = h.dt;
export const em: typeof h['em'] = h.em;
export const embed: typeof h['embed'] = h.embed;
export const fieldset: typeof h['fieldset'] = h.fieldset;
export const figcaption: typeof h['figcaption'] = h.figcaption;
export const figure: typeof h['figure'] = h.figure;
export const footer: typeof h['footer'] = h.footer;
export const form: typeof h['form'] = h.form;
export const h1: typeof h['h1'] = h.h1;
export const h2: typeof h['h2'] = h.h2;
export const h3: typeof h['h3'] = h.h3;
export const h4: typeof h['h4'] = h.h4;
export const h5: typeof h['h5'] = h.h5;
// TODO: fix me
// export const h6: typeof h['h6'] = h.h6;
export const head: typeof h['head'] = h.head;
export const header: typeof h['header'] = h.header;
export const hgroup: typeof h['hgroup'] = h.hgroup;
export const hr: typeof h['hr'] = h.hr;
export const html: typeof h['html'] = h.html;
export const i: typeof h['i'] = h.i;
export const iframe: typeof h['iframe'] = h.iframe;
export const img: typeof h['img'] = h.img;
export const input: typeof h['input'] = h.input;
export const ins: typeof h['ins'] = h.ins;
export const kbd: typeof h['kbd'] = h.kbd;
export const label: typeof h['label'] = h.label;
export const legend: typeof h['legend'] = h.legend;
export const li: typeof h['li'] = h.li;
export const link: typeof h['link'] = h.link;
export const main: typeof h['main'] = h.main;
export const map: typeof h['map'] = h.map;
export const mark: typeof h['mark'] = h.mark;
export const menu: typeof h['menu'] = h.menu;
export const meta: typeof h['meta'] = h.meta;
export const meter: typeof h['meter'] = h.meter;
export const nav: typeof h['nav'] = h.nav;
export const noscript: typeof h['noscript'] = h.noscript;
export const object: typeof h['object'] = h.object;
export const ol: typeof h['ol'] = h.ol;
export const optgroup: typeof h['optgroup'] = h.optgroup;
export const option: typeof h['option'] = h.option;
export const output: typeof h['output'] = h.output;
export const p: typeof h['p'] = h.p;
export const picture: typeof h['picture'] = h.picture;
export const pre: typeof h['pre'] = h.pre;
export const progress: typeof h['progress'] = h.progress;
export const q: typeof h['q'] = h.q;
export const rp: typeof h['rp'] = h.rp;
export const rt: typeof h['rt'] = h.rt;
export const ruby: typeof h['ruby'] = h.ruby;
export const s: typeof h['s'] = h.s;
export const samp: typeof h['samp'] = h.samp;
export const script: typeof h['script'] = h.script;
export const section: typeof h['section'] = h.section;
export const select: typeof h['select'] = h.select;
export const slot: typeof h['slot'] = h.slot;
export const small: typeof h['small'] = h.small;
export const source: typeof h['source'] = h.source;
export const span: typeof h['span'] = h.span;
export const strong: typeof h['strong'] = h.strong;
export const style: typeof h['style'] = h.style;
export const sub: typeof h['sub'] = h.sub;
export const summary: typeof h['summary'] = h.summary;
export const sup: typeof h['sup'] = h.sup;
export const table: typeof h['table'] = h.table;
export const tbody: typeof h['tbody'] = h.tbody;
export const td: typeof h['td'] = h.td;
export const template: typeof h['template'] = h.template;
export const textarea: typeof h['textarea'] = h.textarea;
export const tfoot: typeof h['tfoot'] = h.tfoot;
export const th: typeof h['th'] = h.th;
export const thead: typeof h['thead'] = h.thead;
export const time: typeof h['time'] = h.time;
export const title: typeof h['title'] = h.title;
export const tr: typeof h['tr'] = h.tr;
export const track: typeof h['track'] = h.track;
export const u: typeof h['u'] = h.u;
export const ul: typeof h['ul'] = h.ul;
// TODO: fix me, "var" is forbidden
// export const var: typeof h['var'] = h.var;
export const video: typeof h['video'] = h.video;
export const wbr: typeof h['wbr'] = h.wbr;
