/**
 * Helper for generated TypeScript type definitions
 */
class TypeDef {
  constructor(name, options = {
    isInterface: false,
    export: false
  }) {
    this.content = [];
    this.finalLine = '}';
    
    let firstLine = options.export ? 'export ' : '';
    firstLine += options.isInterface ? `interface ${name} {` : `type ${name} = {`;
    this.content.push(firstLine);
  }

  addProperty(key, value = 'any', description = '', deprecated = false) {
    if(description) this.content.push(`  /** ${deprecated ? "@deprecated " : ""}${description} */`);
    this.content.push(`  "${key}": ${value};`);
  }

  combineWith(type) {
    this.finalLine += ` & ${type}`;
  }

  toString() {
    return [...this.content, this.finalLine + ';\n'].join('\n');
  }
}

module.exports = { TypeDef }