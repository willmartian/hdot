//@ts-check

// TODO: Clean up this file. It is straight from dumped straight from the brain.
// Possibly look at code-block-writer as an alternative to string manipulation: https://github.com/dsherret/code-block-writer

const {
  getSpec,
  getSpecByTagName,
  getAttrSpecs,
} = require("@markuplint/ml-spec");
const htmlSpecDef = require("@markuplint/html-spec");
const fs = require("fs");

const htmlSpec = getSpec([htmlSpecDef]);
const specs = htmlSpec.specs.filter((spec) => !spec.name.includes(":"));

const content = [
  `// AUTO-GENERATED FILE`,
  `import type { DomTypeMap, HTMLElement } from ".";`
];

const typeMap = [
  `export type ElementMap = {`,
];
specs
  .filter((spec) => !spec.name.includes(":"))
  .forEach((spec) => {
    typeMap.push(
      `  /** ${spec.deprecated ? "@deprecated " : ""}${spec.description} */`
    );
    typeMap.push(`  "${spec.name}": ${spec.name}Element;`);
  });
typeMap.push(`}`);
content.push(typeMap.join("\n"));

specs
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

fs.writeFileSync("./src/types/specTypes.ts", content.join("\n"));
