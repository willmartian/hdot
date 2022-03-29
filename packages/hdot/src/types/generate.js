//@ts-check

const {
  getSpec,
  getSpecByTagName,
  getAttrSpecs,
} = require("@markuplint/ml-spec");
const htmlSpecDef = require("@markuplint/html-spec");
const fs = require("fs");
const { TypeDef, kebabToCamel } = require("./helpers");

function init() {
  const writePath = "./src/types/html.ts";
  const readme = `// WARNING: This file was auto-generated and any changes will be overwritten.`;

  const htmlSpec = getSpec([htmlSpecDef]);
  const specs = htmlSpec.specs.filter((spec) => !spec.name.includes(":"));
  const content = [readme];

  writeElementMap(content, specs);
  writeGlobalAttributes(content, htmlSpec);
  writeElementDefs(content, specs, htmlSpec);

  fs.writeFileSync(writePath, content.join("\n"));
}

const attributeTypes = {
  Any: "string",
  Boolean: "boolean",
  NoEmptyAny: "string",
  OneLineAny: "string",
  Zero: "string",
  Number: "number",
  Uint: "number",
  DOMID: "string",
  "<class-list>": "string",
  TabIndex: "number",
  CustomElementName: "`${string}-${string}`",
};

const getAttrType = (attr, tagName = "TagName") => {
  const wrap = (str) => `(value: ${str}) => HTMLElements[${tagName}]`;
  const type = attr.type;
  if (!type) {
    return wrap("any");
  }

  if (type.enum && type.enum.length > 0) {
    let stringEnum = type.enum.reduce(
      (prev, curr) => (prev += `"${curr}" | `),
      ""
    );
    if (stringEnum.endsWith(" | ")) {
      stringEnum = stringEnum.slice(0, -3);
    }
    return wrap(stringEnum);
  }

  return wrap(attributeTypes[type.toString()] ?? "string");
};

const writeGlobalAttributes = (content, htmlSpec) => {
  content.push(
    `type children = (string | TemplateStringsArray | HTMLElements[keyof HTMLElements])[];`
  );

  const htmlDef = new TypeDef(
    `GlobalHTMLAttributes<TagName extends keyof HTMLElements>`
  );
  const globalAttrs = htmlSpec.def["#globalAttrs"]["#HTMLGlobalAttrs"];
  for (const name in globalAttrs) {
    const attr = globalAttrs[name];
    const desc =
      attr.description === undefined
        ? `@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-${name}`
        : attr.description;
    htmlDef.addProperty(
      kebabToCamel(name),
      getAttrType(attr),
      desc,
      attr.deprecated
    );
  }
  htmlDef.addProperty(
    "[dataAttribute: `data${string}`]",
    `(value: string | boolean | number) => HTMLElements[TagName]`
  );
  htmlDef.addProperty(`(...children: children)`, `string`);
  content.push(htmlDef.toString());

  const ariaDef = new TypeDef(
    `GlobalAriaAttributes<TagName extends keyof HTMLElements>`
  );
  htmlSpec.def["#ariaAttrs"].forEach((attr) => {
    ariaDef.addProperty(
      kebabToCamel(attr.name),
      getAttrType({ ...attr, type: attr.value }),
      attr.description,
      attr.deprecated
    );
  });
  content.push(ariaDef.toString());
};

const writeElementMap = (content, specs) => {
  const type = new TypeDef("HTMLElements", {
    export: true,
    isInterface: false,
  });
  specs.forEach((spec) => {
    type.addProperty(
      spec.name,
      `${spec.name}Element`,
      spec.description,
      spec.deprecated
    );
  });
  content.push(type.toString());
};

const writeElementDefs = (content, specs, htmlSpec) => {
  specs.forEach((s) => {
    const spec = {
      name: s.name,
      description: s.description,
      ...getSpecByTagName(s.name, htmlSpec),
    };

    const type = new TypeDef(`${spec.name}Element`, {
      isInterface: false,
      export: false,
    });

    getAttrSpecs(spec.name, htmlSpec)
      .filter((attr) => attr.type !== "FunctionBody")
      .filter(
        (attr) =>
          !(attr.name in htmlSpec.def["#globalAttrs"]["#HTMLGlobalAttrs"])
      )
      .forEach((attr) => {
        type.addProperty(
          kebabToCamel(attr.name),
          getAttrType(attr, `"${spec.name}"`),
          attr.description,
          attr.deprecated
        );
      });

    /**
     * @todo create reserved words type from global attributes
     */
    type.combineWith(`GlobalAriaAttributes<"${spec.name}">`);
    type.combineWith(`GlobalHTMLAttributes<"${spec.name}">`);

    content.push(type.toString());
  });
};

init();
