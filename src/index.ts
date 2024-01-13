export default (condition: boolean, func: (...args: any) => any, ...args: any) => condition ? undefined : func(...args);
