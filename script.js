"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = 'Alex';
        this._age = 23;
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 0 && value < 100) {
                this._age = value;
            }
            else {
                throw new Error('Неверный возраст');
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.sayHelo = function () {
        return "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 " + this._name;
    };
    Person.description = function () {
        return 'Класс "Человек"';
    };
    Person.isFlying = false;
    return Person;
}());
var alex = new Person('Игорь', 23);
var dima = new Person('Дима', 18);
console.log(alex);
console.log(alex.sayHelo());
console.log(alex.name);
alex.age = 50;
console.log(alex.age);
console.log(Person.isFlying);
console.log(dima);
console.log(dima.sayHelo());
if (alex instanceof Person) {
    console.log('Alex is Person');
}
// https://www.youtube.com/watch?v=lVU6BY3cty4
//# sourceMappingURL=script.js.map