"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (condition, func, ...args) => condition ? undefined : func(...args);
