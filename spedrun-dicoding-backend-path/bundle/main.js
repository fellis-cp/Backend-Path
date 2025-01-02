"use strict";
/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const string = "saippuakivikauppias";
const array = (0, utils_1.splitString)(string);
const uniqueArray = (0, utils_1.unique)(array);
console.log(string);
console.log(array);
console.log(uniqueArray);
