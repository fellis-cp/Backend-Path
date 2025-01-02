"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unique = exports.splitString = void 0;
const splitString = (str) => {
    return str.split("");
};
exports.splitString = splitString;
const unique = (arr) => {
    return [...new Set(arr)];
};
exports.unique = unique;
