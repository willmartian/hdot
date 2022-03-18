"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@markuplint/types");
const ml_spec_1 = require("@markuplint/ml-spec");
const htmlSpecDef = require("@markuplint/html-spec");
const htmlSpec = (0, ml_spec_1.getSpec)([htmlSpecDef]);
const validate = {
    attribute: (tagName, key, args) => {
        if (key.startsWith('data-')) {
            return [key, args];
        }
        const type = getAttributeType(tagName, key);
        const res = (0, types_1.check)(args, type);
        if (!res.matched) {
            console.error(res);
        }
        else {
            console.log(res);
        }
        return [key, args];
    }
};
const getAttributeType = (tagName, key) => {
    var _a;
    const attrSpec = (_a = (0, ml_spec_1.getAttrSpecs)(tagName, htmlSpec)) === null || _a === void 0 ? void 0 : _a.find(attr => attr.name.toLowerCase() === key.toLowerCase());
    if (attrSpec) {
        return Array.isArray(attrSpec.type) ? attrSpec.type[0] : attrSpec.type;
    }
    console.error(`Cant find attribute type of "${key}" on <${tagName}>`);
    return 'Any';
};
exports.default = validate;
//# sourceMappingURL=validate.js.map