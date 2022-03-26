//@ts-check

const {
  getSpec,
  getSpecByTagName,
  getAttrSpecs,
} = require("@markuplint/ml-spec");
const htmlSpecDef = require("@markuplint/html-spec");
const fs = require("fs");
const { TypeDef } = require("./helpers");

function init() {

  const writePath = "./html.d.ts";
  const readme = `// WARNING: This file was auto-generated and any changes will be overwritten.`;

  //---

  const htmlSpec = getSpec([htmlSpecDef]);
  const specs = htmlSpec.specs.filter((spec) => !spec.name.includes(":"));
  const content = [
    readme,
    `import type AttributeTypes from "./src/AttributeTypes";`
  ];

  writeElementMap(content, specs);
  writeGlobalAriaAttributes(content, htmlSpec);
  writeElementDefs(content, specs, htmlSpec);

  fs.writeFileSync(writePath, content.join("\n"));
}

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
  return `AttributeTypes[${
    strType.startsWith('"') ? strType : `\`${strType}\``
  }]`;
};

const writeGlobalAriaAttributes = (content, htmlSpec) => {
  const type = new TypeDef(`GlobalAriaAttributes`);
  htmlSpec.def['#ariaAttrs']
    .forEach((attr) => {
      type.addProperty(attr.name, getAttrType(attr), attr.description, attr.deprecated);
    });
  content.push(type.toString());
}

const writeElementMap = (content, specs) => {
  const type = new TypeDef('HTMLElements', {
    export: true,
    isInterface: false
  });
  specs
    .forEach((spec) => {
      type.addProperty(spec.name, `${spec.name}Element`, spec.description, spec.deprecated)
    });
  content.push(type.toString());
}

const writeElementDefs = (content, specs, htmlSpec) => {
  specs
  .forEach((s) => {
    const spec = {
      name: s.name,
      description: s.description,
      ...getSpecByTagName(s.name, htmlSpec),
    };

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
      return `AttributeTypes[${
        strType.startsWith('"') ? strType : `\`${strType}\``
      }]`;
    };

    const type = new TypeDef(`${spec.name}Element`, {
      isInterface: false,
      export: false
    })

    getAttrSpecs(spec.name, htmlSpec)
      .filter((attr) => attr.type !== "FunctionBody")
      .forEach((attr) => {
        type.addProperty(attr.name, getAttrType(attr), attr.description, attr.deprecated);
      });

    type.addProperty('allowedChildren');
    type.combineWith(`GlobalAriaAttributes`);

    content.push(type.toString());
  });
}

init();
