// type A<T> = T;
// type B = A<string>;
// type C = A<'hello'>;
// type D = A<number>;

type MyArray<T> = T[];
// const arr: MyArray<string> = ['Hello', 'TypeScript'];

//Обобщение Функций
// function echo<T>(x: T): T {
//     return x;
// }

// const echo = <T>(x: T): T => x;

const echo: <T>(x: T) => T = <T>(x: T): T => {
    return x;
};

// const result: string = echo('Hello TypeScript');

// const result = echo<string>('Hello!');

//Обобщение Классов
// class List<T> {
//     elements: T[] = [];

//     add(element: T) {
//         this.elements.push(element);
//     }
// }

// const list = new List<string>();
// list.add('Hello');
// list.add('TS');

//Обобщение интерфейсов
interface IList<T> {
    elements: T[];
    add(element: T): void;
}

class List implements IList<string> {
    elements: string[] = [];
    add(element: string): void {
        this.elements.push(element);
    }
}

const list = new List();
list.add('Hello');
list.add('TS');

// type A<T extends string> = T;
// type A<T> = T extends string ? string : never;
// type B = A<string>;
// type C = A<'hello'>;
// type D = A<number>;

interface IName {
    name: string;
}

function printName<T extends IName>(person: T) {
    console.log(person.name);
}

printName({ name: 'Igor', age: 23 });

// interface A {
//     a: string;
//     b: number;
//     c: boolean;
// }
// type B = keyof A;

function getProperty<ObjectType, KeyType extends keyof ObjectType>(object: ObjectType, key: KeyType) {
    return object[key];
}

// const result = getProperty({ name: 'Igor', age: 23 }, 'name');

// const arr = [1, 'Hello', false];
// type A<T> = T extends (infer U)[] ? U : never;
// type B = typeof arr;
// type C = A<B>;

const person = { name: 'Igor', age: 23 };
type A<T> = T extends {
    [key: string]: infer U;
}
    ? U
    : never;
type B = typeof person;
type C = A<B>;

class Cat {
    say(): string {
        return 'meou';
    }
}

class Dog {
    say(): string {
        return 'woof';
    }
}

interface IClass<T> {
    new (): T;
}

function createObject<T>(c: IClass<T>): T {
    return new c();
}

const pet = createObject(Cat);

// https://www.youtube.com/watch?v=Q5YPUIFqijQ
