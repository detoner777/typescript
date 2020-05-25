"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}px`);
        }
        else {
            console.log(`%c${text}`, `color: ${color}`);
        }
    }
    Utils.log = log;
    log('Text inside', '#d9534f', 40);
})(Utils || (Utils = {}));
Utils.log('Text outside', '#d9534f');
var Animals;
(function (Animals) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    Animals.Animal = Animal;
    let Pets;
    (function (Pets) {
        class Cat extends Animal {
            say() {
                Utils.log(`${this.name}: myauu`, `#96ceb4`, 20);
            }
        }
        Pets.Cat = Cat;
        class Dog extends Animal {
            say() {
                Utils.log(`${this.name}: gav`, `#ffceb4`, 30);
            }
        }
        Pets.Dog = Dog;
    })(Pets = Animals.Pets || (Animals.Pets = {}));
})(Animals || (Animals = {}));
(function (Animals) {
    var _text;
    class Tiger extends Animals.Animal {
        constructor(name, text) {
            super(name);
            _text.set(this, void 0);
            this.text = text;
            __classPrivateFieldSet(this, _text, text);
        }
        say() {
            Utils.log(`${this.name}: ${this.text} ${__classPrivateFieldGet(this, _text)}`, '#ffad60', 60);
        }
    }
    _text = new WeakMap();
    Animals.Tiger = Tiger;
})(Animals || (Animals = {}));
const tiger = new Animals.Tiger('Tigr', 'rrr');
// console.log(tiger.text);
// console.log(tiger.#text);
tiger.say();
const cat = new Animals.Pets.Cat('Barsik');
cat.say();
const dog = new Animals.Pets.Dog('Sharik');
dog.say();
// https://www.youtube.com/watch?v=jKN-VqWQdlY
//# sourceMappingURL=script.js.map