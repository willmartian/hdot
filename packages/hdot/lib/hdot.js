"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Hdot_instances, _Hdot_call;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPlugins = exports.h = void 0;
const initial = {
    _plugins: []
};
exports.h = new Proxy(initial, {
    get(target, key, reciever) {
        if (typeof key !== 'string' || key === 'toString' || key.startsWith('_')) {
            return Reflect.get(target, key, reciever);
        }
        ;
        return new Hdot(key, target);
    }
});
class Hdot extends Function {
    constructor(tagName, h) {
        super();
        _Hdot_instances.add(this);
        this.htmlString = '';
        this.tagName = tagName;
        this.htmlString = tagName + ' ';
        const proxy = new Proxy(this, {
            get(target, key, reciever) {
                if (typeof key !== 'string' || key === 'toString' || key === 'htmlString') {
                    return Reflect.get(target, key, reciever);
                }
                ;
                return (args) => {
                    let k = key;
                    if (k === 'className') {
                        k = 'class';
                    }
                    if (k.startsWith('data') && k.length > 4) {
                        k = 'data-' + k.slice(4);
                    }
                    k = k.toLowerCase();
                    let a = args;
                    for (const plugin of h._plugins) {
                        if (plugin.attribute) {
                            const [pluginKey, pluginArgs] = plugin.attribute(tagName, k, a);
                            k = pluginKey;
                            a = pluginArgs;
                        }
                    }
                    target.htmlString += target.attribute(k, a);
                    return proxy;
                };
            },
            apply: (target, _thisArg, args) => {
                return __classPrivateFieldGet(target, _Hdot_instances, "m", _Hdot_call).call(target, ...args);
            }
        });
        return proxy;
    }
    attribute(key, value) {
        let attributeString = '';
        if (typeof value === 'boolean') {
            attributeString = value ? `${key}` : '';
        }
        else {
            attributeString = `${key}${value ? `="${value}"` : ''}`;
        }
        return attributeString + ' ';
    }
    toString(children = []) {
        return `<${this.htmlString.trim()}>${children.join('')}</${this.htmlString.split(' ')[0]}>`;
    }
}
_Hdot_instances = new WeakSet(), _Hdot_call = function _Hdot_call(...args) {
    return this.toString(args);
};
const setPlugins = (h, plugins) => {
    h._plugins = plugins;
};
exports.setPlugins = setPlugins;
//# sourceMappingURL=hdot.js.map