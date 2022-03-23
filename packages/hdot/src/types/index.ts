import type { ElementMap } from "./specTypes";

// Proxied on type HTML
export type HTMLElement<TagName extends keyof ElementMap> = {
  (...children: ElementMap[TagName]["allowedChildren"][]): string;
  children: (...children: string[]) => string;
  [key: `data${string}`]: (
    val: string | boolean | number
  ) => HTMLElement<TagName>;
} & ElementMap[TagName];

// Proxied on type H
export type HTML = {
  [TagName in keyof ElementMap]-?: HTMLElement<TagName>;
};

export type Plugin = {
  attribute?: (tagName: string, key: string, args: any) => [string, any];
  serialize?: (tagName: string, args: any[]) => any[];
};

export type DomTypeMap = {
  Any: string;
  Boolean: boolean;
  NoEmptyAny: string;
  OneLineAny: string;
  Zero: string;
  Number: number;
  Uint: number;
  DOMID: string;
  "<class-list>": string | string[];
  TabIndex: number;
  CustomElementName: `${string}-${string}`;
  [catchAll: string]: any;
  // TODO: https://github.com/markuplint/markuplint/tree/main/packages/%40markuplint/types
};
