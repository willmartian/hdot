//@ts-check

/**
 * This file is a mess don't look at it
 */

const {
  getSpec,
  getSpecByTagName,
  getAttrSpecs,
} = require("@markuplint/ml-spec");
const htmlSpecDef = require("@markuplint/html-spec");
const fs = require("fs");

// /**
//  * @typedef {import('@markuplint/ml-spec/')} Attribute
//  */

const htmlSpec = getSpec([htmlSpecDef]);

console.log(Object.keys(htmlSpec.def["#globalAttrs"]));
console.log(getAttrSpecs("a", htmlSpec).filter((att) => !att.deprecated));

const content = [""];

const typeMap = [
  `import { HTMLElement } from "../index";`,
  `import { DomTypeMap } from "./attributeTypes";`,
  `export type ElementMap = {`,
];
htmlSpec.specs
  .filter((spec) => !spec.name.includes(":"))
  .forEach((spec) => {
    typeMap.push(
      `  /** ${spec.deprecated ? "@deprecated " : ""}${spec.description} */`
    );
    typeMap.push(`  "${spec.name}": ${spec.name}Element;`);
  });
typeMap.push(`}`);
content.push(typeMap.join("\n"));

htmlSpec.specs
  .filter((s) => !s.name.includes(":"))
  .forEach((s) => {
    const spec = {
      name: s.name,
      description: s.description,
      ...getSpecByTagName(s.name, htmlSpec),
    };

    const typeDef = [`type ${spec.name}Element = {`];

    const getAttrType = (attr) => {
      const type = attr.type;
      if (!type) {
        return "any";
      }

      if (type.enum && type.enum.length > 0) {
        let stringEnum = type.enum.reduce(
          (prev, curr) => (prev += `"${curr}" | `),
          ""
        );
        if (stringEnum.endsWith(" | ")) {
          return stringEnum.slice(0, -3);
        }
        return stringEnum;
      }

      const strType = JSON.stringify(type);
      return `DomTypeMap[${
        strType.startsWith('"') ? strType : `\`${strType}\``
      }]`;
    };

    const getAttr = (attr) => {
      attr.description &&
        typeDef.push(
          `  /** ${attr.deprecated ? "@deprecated " : ""}${attr.description} */`
        );
      typeDef.push(
        `  "${attr.name}": (val: ${getAttrType(attr)}) => HTMLElement<"${
          spec.name
        }">;`
      );
    };

    getAttrSpecs(spec.name, htmlSpec)
      .filter((attr) => attr.type !== "FunctionBody")
      .forEach((attr) => {
        getAttr(attr);
      });

    typeDef.push(`  allowedChildren: any;`);

    typeDef.push("}");
    content.push(typeDef.join("\n"));
  });

/*
//TODO
type TextContent = string | TemplateStringsArray;
type PhrasingElements = HTMLElement<'p'> | HTMLElement<'div'> | TextContent;
*/

fs.writeFileSync("./src/htmlSpecTypes.ts", content.join("\n"));
