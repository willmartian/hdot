import type { ElementMap } from "./types/htmlSpecTypes";
export declare type HTMLElement<TagName extends keyof ElementMap> = {
    (...children: (ElementMap[TagName]['allowedChildren'])[]): string;
    children: (...children: string[]) => string;
    tagName: string;
    htmlString: string;
    [key: `data${string}`]: (val: string | boolean | number) => HTMLElement<TagName>;
} & ElementMap[TagName];
export declare type HTML = {
    [TagName in keyof ElementMap]-?: HTMLElement<TagName>;
} & {
    _plugins: Plugin[];
};
export declare const h: HTML;
export declare type Plugin = {
    attribute?: (tagName: string, key: string, args: any) => [string, any];
    serialize?: (tagName: string, args: any[]) => any[];
};
export declare const setPlugins: (h: HTML, plugins: Plugin[]) => void;
