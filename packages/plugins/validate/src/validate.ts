import type { TransformerPlugin, TreeNode } from "hdot/src/types";
import { check } from "@markuplint/types";
import { getSpec, getAttrSpecs } from "@markuplint/ml-spec";
import * as htmlSpecDef from "@markuplint/html-spec";
const htmlSpec = getSpec([htmlSpecDef]);

const validate: TransformerPlugin = (tree: TreeNode) => {
  const validateAttributes = (tree: TreeNode) => {
    Object.keys(tree.attrs).forEach((key) => {
      if (key.startsWith("data-")) {
        return;
      }
      const type = getAttributeType(tree.tag, key);
      const res = check(tree.attrs[key], type);
      if (!res.matched) {
        throw new Error(`hdot: ${res}`);
      }
    });
    tree.content.forEach((content) => {
      if (typeof content !== "string") {
        validateAttributes(content);
      }
    });
  };

  validateAttributes(tree);
  return tree;
};

const getAttributeType = (tagName: string, key: string) => {
  const attrSpec = getAttrSpecs(tagName, htmlSpec)?.find(
    (attr) => attr.name.toLowerCase() === key.toLowerCase()
  );
  if (attrSpec) {
    return Array.isArray(attrSpec.type) ? attrSpec.type[0] : attrSpec.type;
  }
  console.error(
    `hdot: Cannot validate attribute type of "${key}" on <${tagName}>`
  );
  return "Any";
};

export default validate;
