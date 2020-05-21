// interface IPerson {
//     name?: string;
//     age: number;
//     sayHello(): string;
// }

// type IPerson = {
//     name: string;
//     age: number;
//     sayHello(): string;
// };

interface IPersonProps {
    name?: string;
    age: number;
}

interface IPerson extends IPersonProps {
    sayHello(): string;
}

abstract class Person implements IPerson {
    name: string = '';
    age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): string {
        return `Привет, меня зовут ${this.name}`;
    }

    abstract description(): string;
}

class Student extends Person {
    group: string = '';
    course: number = 0;

    constructor(name: string, age: number, group: string, course: number) {
        super(name, age);
        this.group = group;
        this.course = course;
    }
    sayHello(): string {
        // return `привет я ${this.name} из группы ${this.group}`;
        const text = super.sayHello();
        return `${text} Я и группы ${this.group}`;
    }
    description(): string {
        return `
            Имя: ${this.name}
            Возвраст: ${this.age}
            Группа: ${this.group}
            Курс: ${this.course}
        `;
    }
}

class Teacher extends Person {
    disciplines: string[] = [];

    constructor(name: string, age: number, disciplines: string[]) {
        super(name, age);
        this.disciplines = disciplines;
    }
    description(): string {
        return `
            Имя: ${this.name}
            Возвраст: ${this.age}
            Дисциплины: ${this.disciplines}
            `;
    }
}

// const ira: Person = new Person('Ира', 18);
// console.log(ira);

const denis: Student = new Student('Денис', 25, 'A1', 1);
console.log(denis);

// приведение типов
const newDenis: Person = <Person>denis;
console.log(newDenis);

const liza: Person = new Student('Лиза', 20, 'A2', 2);
console.log(liza);

const igor: Teacher = new Teacher('Igor', 23, ['TypeScript', 'React Native']);
console.log(igor);

// https://www.youtube.com/watch?v=0zmMHXoUzRo
