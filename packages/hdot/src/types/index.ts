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
