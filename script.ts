namespace Utils {
    export function log(text: string, color: string): void;
    export function log(text: string, color: string, fontSize: number): void;

    export function log(text: string, color: string, fontSize?: number) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
        } else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }

    log('Text inside', '#d9534f', 40);
}

Utils.log('Text outside', '#d9534f');

namespace Animals {
    export abstract class Animal {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }
        abstract say(): void;
    }
    export namespace Pets {
        export class Cat extends Animal {
            say() {
                Utils.log(`${this.name}: myauu`, `#96ceb4`, 20);
            }
        }
        export class Dog extends Animal {
            say() {
                Utils.log(`${this.name}: gav`, `#ffceb4`, 30);
            }
        }
    }
}

namespace Animals {
    export class Tiger extends Animals.Animal {
        private text: string;
        #text: string;

        constructor(name: string, text: string) {
            super(name);
            this.text = text;
            this.#text = text;
        }
        say() {
            Utils.log(`${this.name}: ${this.text} ${this.#text}`, '#ffad60', 60);
        }
    }
}

const tiger = new Animals.Tiger('Tigr', 'rrr');
// console.log(tiger.text);
// console.log(tiger.#text);
tiger.say();

const cat = new Animals.Pets.Cat('Barsik');
cat.say();

const dog = new Animals.Pets.Dog('Sharik');
dog.say();

// https://www.youtube.com/watch?v=jKN-VqWQdlY
