"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ifnot(condition, func, ...args) {
    return condition ? undefined : func(...args);
}
exports.default = ifnot;
