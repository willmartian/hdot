import { Plugin } from "hdot";
import { check } from '@markuplint/types';
import { getSpec, getAttrSpecs } from '@markuplint/ml-spec';
import * as htmlSpecDef from '@markuplint/html-spec';
const htmlSpec = getSpec([htmlSpecDef]);

const validate: Plugin = {
  attribute: (tagName, key, args) => {
    if (key.startsWith('data-')) {
      return [key, args];
    }
    const type = getAttributeType(tagName, key);
    const res = check(args, type);
    if (!res.matched) {
      console.error(res);
    } else {
      console.log(res);
    }
    return [key, args];
  }
}

const getAttributeType = (tagName: string, key: string) => {
  const attrSpec = getAttrSpecs(tagName, htmlSpec)?.find(attr => attr.name.toLowerCase() === key.toLowerCase());
  if (attrSpec) {
    return Array.isArray(attrSpec.type) ? attrSpec.type[0] : attrSpec.type;
  }
  console.error(`Cant find attribute type of "${key}" on <${tagName}>`)
  return 'Any';
}

export default validate;