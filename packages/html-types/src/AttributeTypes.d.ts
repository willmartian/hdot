type AttributeTypes = {
  Any: string;
  Boolean: boolean;
  NoEmptyAny: string;
  OneLineAny: string;
  Zero: string;
  Number: number;
  Uint: number;
  DOMID: string;
  "<class-list>": string;
  TabIndex: number;
  CustomElementName: `${string}-${string}`;
  // TODO: https://github.com/markuplint/markuplint/tree/main/packages/%40markuplint/types
} & {
  [key: string]: string;
};

export default AttributeTypes;