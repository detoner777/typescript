"use strict";
// type A<T> = T;
// type B = A<string>;
// type C = A<'hello'>;
// type D = A<number>;
// const arr: MyArray<string> = ['Hello', 'TypeScript'];
//Обобщение Функций
// function echo<T>(x: T): T {
//     return x;
// }
// const echo = <T>(x: T): T => x;
const echo = (x) => {
    return x;
};
class List {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
    }
}
const list = new List();
list.add('Hello');
list.add('TS');
function printName(person) {
    console.log(person.name);
}
printName({ name: 'Igor', age: 23 });
// interface A {
//     a: string;
//     b: number;
//     c: boolean;
// }
// type B = keyof A;
function getProperty(object, key) {
    return object[key];
}
// const result = getProperty({ name: 'Igor', age: 23 }, 'name');
// const arr = [1, 'Hello', false];
// type A<T> = T extends (infer U)[] ? U : never;
// type B = typeof arr;
// type C = A<B>;
const person = { name: 'Igor', age: 23 };
class Cat {
    say() {
        return 'meou';
    }
}
class Dog {
    say() {
        return 'woof';
    }
}
function createObject(c) {
    return new c();
}
const pet = createObject(Cat);
// https://www.youtube.com/watch?v=Q5YPUIFqijQ
//# sourceMappingURL=script.js.map