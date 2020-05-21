"use strict";
// interface IPerson {
//     name?: string;
//     age: number;
//     sayHello(): string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        return "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 " + this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, group, course) {
        var _this = _super.call(this, name, age) || this;
        _this.group = '';
        _this.course = 0;
        _this.group = group;
        _this.course = course;
        return _this;
    }
    Student.prototype.sayHello = function () {
        // return `привет я ${this.name} из группы ${this.group}`;
        var text = _super.prototype.sayHello.call(this);
        return text + " \u042F \u0438 \u0433\u0440\u0443\u043F\u043F\u044B " + this.group;
    };
    Student.prototype.description = function () {
        return "\n            \u0418\u043C\u044F: " + this.name + "\n            \u0412\u043E\u0437\u0432\u0440\u0430\u0441\u0442: " + this.age + "\n            \u0413\u0440\u0443\u043F\u043F\u0430: " + this.group + "\n            \u041A\u0443\u0440\u0441: " + this.course + "\n        ";
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, disciplines) {
        var _this = _super.call(this, name, age) || this;
        _this.disciplines = [];
        _this.disciplines = disciplines;
        return _this;
    }
    Teacher.prototype.description = function () {
        return "\n            \u0418\u043C\u044F: " + this.name + "\n            \u0412\u043E\u0437\u0432\u0440\u0430\u0441\u0442: " + this.age + "\n            \u0414\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u044B: " + this.disciplines + "\n            ";
    };
    return Teacher;
}(Person));
// const ira: Person = new Person('Ира', 18);
// console.log(ira);
var denis = new Student('Денис', 25, 'A1', 1);
console.log(denis);
// приведение типов
var newDenis = denis;
console.log(newDenis);
var liza = new Student('Лиза', 20, 'A2', 2);
console.log(liza);
var igor = new Teacher('Igor', 23, ['TypeScript', 'React Native']);
console.log(igor);
// https://www.youtube.com/watch?v=0zmMHXoUzRo
//# sourceMappingURL=script.js.map