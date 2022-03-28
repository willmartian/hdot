//@ts-check

/**
 * Helper for generated TypeScript type definitions
 */
class TypeDef {
  constructor(
    name,
    options = {
      isInterface: false,
      export: false,
    }
  ) {
    this.content = [];
    this.finalLine = "}";

    let firstLine = options.export ? "export " : "";
    firstLine += options.isInterface
      ? `interface ${name} {`
      : `type ${name} = {`;
    this.content.push(firstLine);
  }

  addProperty(key, value = "any", description = "", deprecated = false) {
    if (description)
      this.content.push(
        `  /** ${deprecated ? "@deprecated " : ""}${description} */`
      );
    const k = [`[`, `"`, `'`, `(`].includes(key[0]) ? key : `"${key}"`;
    this.content.push(`  ${k}: ${value};`);
  }

  combineWith(type) {
    this.finalLine += ` & ${type}`;
  }

  toString() {
    return [...this.content, this.finalLine + ";\n"].join("\n");
  }
}

const kebabToCamel = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

module.exports = { TypeDef, kebabToCamel };
