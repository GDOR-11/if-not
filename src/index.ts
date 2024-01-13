export default function ifnot(condition: boolean, func: (...args: any) => any, ...args: any) {
    return condition ? undefined : func(...args);
}
