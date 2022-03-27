import { Plugin } from "hdot";

const plugin: Plugin = {
  attribute: (tagName, key, args) => {
    if (key.startsWith("data-")) {
      return [key, args];
    }
    
    return [key, args];
  },
};

export default plugin;
