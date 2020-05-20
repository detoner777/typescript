"use strict";
//масивы
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = [1, 2, ''];
var d = [1, 2, ''];
//кортежи
var e = [1, ''];
var f = [1, ''];
f = [1];
//перечисление
var G;
(function (G) {
    G["A"] = "Hello";
    G["B"] = "TypeScrypt";
})(G || (G = {}));
console.log(G.A, G.B);
console.log(0 /* A */, G.B);
//https://www.youtube.com/watch?v=xhncw1nRPUc
//# sourceMappingURL=script.js.map