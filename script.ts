class Person {
    _name: string = 'Alex';
    _age: number = 23;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0 && value < 100) {
            this._age = value;
        } else {
            throw new Error('Неверный возраст');
        }
    }

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    sayHelo(): string {
        return `Привет, меня зовут ${this._name}`;
    }
    static isFlying = false;

    static description(): string {
        return 'Класс "Человек"';
    }
}

const alex: Person = new Person('Игорь', 23);
const dima: Person = new Person('Дима', 18);

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
