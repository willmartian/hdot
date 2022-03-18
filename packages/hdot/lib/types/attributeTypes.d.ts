export declare type DomTypeMap = {
    'Any': string;
    'Boolean': boolean;
    'NoEmptyAny': string;
    'OneLineAny': string;
    'Zero': string;
    'Number': number;
    'Uint': number;
    'DOMID': string;
    '<class-list>': string | string[];
    'TabIndex': number;
    'CustomElementName': `${string}-${string}`;
    [catchAll: string]: any;
};
