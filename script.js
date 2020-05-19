"use strict";
function a(x, y) {
    return x + y;
}
var b = function (x, y) { return x + y; };
// /Сигнатура:
var c;
c = function (x, y) {
    return x + y;
};
///void если не будем использовать return
function d(x, y) {
    console.log(x + y);
}
/// функция которая никогда не завершиться(бесконечный цикл)
function e(x) {
    throw new Error(x);
}
function g(x, y) {
    if (typeof x === 'number') {
        return x + y;
    }
    else {
        return x + " " + y;
    }
}
console.log(g(1, 2));
console.log(g('sds', 2));
//# sourceMappingURL=script.js.map