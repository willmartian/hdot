/**
 * Mirrors the default template literal function
 * @param {ArrayLike<string>} strings
 * @param {any[]} keys
 * @returns {string}
 */
//@ts-ignore
export const rawTemplate = (strings, ...keys) =>
  String.raw({ raw: strings }, ...keys);

export const isTemplateParam = (...args: any[]): boolean => {
  // TODO: is there a Symbol we can check instead of .raw?
  return (
    args !== undefined && args[0] !== undefined && args[0].raw !== undefined
  );
  //&& Array.isArray(args[1]);
};

/**
 * @param key An object's property key we are trying to access
 * @param omitted Keys on which we Reflect the default behavior
 */
export const keyIsOmitted = (
  key: string | symbol,
  ...omitted: string[]
): key is symbol => typeof key !== "string" || omitted.includes(key);
