let a: any = 1;
let b: number = a;
//приведение типов
let c: unknown = 1;
let d: number = <number>c;
let e: number = c as number;

let f: any = 'hello';
let g: number = (<string>f).length;

//объединение типов
type I = number | string;
let h: I = 1;
h = 'Hello';

type J = 1 | 2 | 3;
let j: J = 1;

type K = 'a' | 'b' | 'c';
let k: K = 'a';

type JKL = 'a' | 1 | boolean;
let jkl: JKL = true;

type M = { a: string } | { b: string };
let m: M = { a: '' };
let m2: M = { b: '' };

//пeресичение типов
type N = { a: string } & { b: string };
let n: N = { a: '', b: '' };

type O = { a: string; b?: string };
let o: O = { a: '' };
o = { a: '', b: '' };

if ('b' in o) {
    console.log('Hello TypeScript');
}
