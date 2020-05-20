//масивы
let a: number[] = [1, 2, 3];

let b: Array<number> = [1, 2, 3];

let c: (number | string)[] = [1, 2, ''];

let d: Array<number | string> = [1, 2, ''];

//кортежи
let e: [number, string] = [1, ''];

let f: [number, string?] = [1, ''];
f = [1];

//перечисление
enum G {
    A = 'Hello',
    B = 'TypeScrypt',
}

console.log(G.A, G.B);

const enum H {
    A,
    B,
}
console.log(H.A, G.B);

//https://www.youtube.com/watch?v=xhncw1nRPUc
