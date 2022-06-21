import { BaseHTMLElements } from "./html";

// import { HTMLElements, GlobalAriaAttributes, GlobalHTMLAttributes } from "./html";
export * from "./html";

type Tree = (TreeNode | string)[];
export type TreeNode = {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  content: Tree;
};

export type TransformerPlugin = {
  (tree: TreeNode): TreeNode;
};
export type SerializerPlugin = {
  (tree: TreeNode): string;
};
export type PluginArray =
  | [...TransformerPlugin[], SerializerPlugin]
  | TransformerPlugin[];

// export type MapCustomElements<CustomElements> = {
//   [TagName in keyof CustomElements]: {
//     [AttributeName in keyof CustomElements[TagName]]: (value: CustomElements[TagName][AttributeName]) => HTMLElements<CustomElements>[TagName];
//   }
// }

// export type HTMLElements = BaseHTMLElements & HTMLElementTagNameMap

// type HTMLElementTagNameMap = (globalThis.HTMLElementTagNameMap extends never ? {} : globalThis.HTMLElementTagNameMap)

// export type MapCustomElements = {
//   [TagName in keyof HTMLElementTagNameMap]: {
//     [AttributeName in keyof HTMLElementTagNameMap[TagName]]: (value: HTMLElementTagNameMap[TagName][AttributeName]) => HTMLElements<CustomElements>[TagName];
//   }
// }

// export type AddGlobalAttributes<CustomElements> = {
//   [TagName in keyof CustomElements]: CustomElements[TagName] & GlobalAriaAttributes<CustomElements[TagName]> & GlobalHTMLAttributes<CustomElements[TagName]> 
// }

// type CustomElements = {
//   /**
//    * @description nice
//    */
//   "myElement": {
//     /**
//      * wooohooo
//      * @description lets gooo
//      * @link https://willmartian.com
//      */
//     testy: string;
//   }
// }

type g = globalThis.HTMLElementTagNameMap


declare global {
  interface HTMLElementTagNameMap {
    'my-element': 5;
  }
}