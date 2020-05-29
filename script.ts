//Parcial
type Person1 = { name: string; age: number };
type Person2 = Partial<Person1>;
type MyParcial<T> = { [P in keyof T]?: T[P] };
type Person3 = MyParcial<Person1>;

//Required
type Animal1 = { name: string; weight?: number };
type Animal2 = Required<Animal1>;
type MyRequired<T> = { [P in keyof T]-?: T[P] };
type Animal3 = MyRequired<Animal1>;

//NonNullable
type Color1 = string | undefined | null;
type Color2 = NonNullable<Color1>;
type MyNonNullable<T> = T extends null | undefined ? never : T;
type Color3 = MyNonNullable<Color1>;

//Record
type Dimensions1 = { width: number; height: number; length: number };
type Dimensions2 = Record<'width' | 'height' | 'length', number>;
type MyRecord<K extends keyof any, T> = { [P in K]: T };
type Dimensions3 = MyRecord<'width' | 'height' | 'length', number>;

// Readonly
type Article1 = { title: string; page: number };
type Article2 = Readonly<Article1>;
type Article3 = MyReadonly<Article1>;
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

const article1: Article3 = { title: 'Article2', page: 2 };
// article1.title = 'Rrr';

//ReadonlyArray
type Articles1 = Array<Article3>;
type Articles2 = ReadonlyArray<Article3>;

const articles1: Articles1 = [
    { title: 'Article1', page: 1 },
    { title: 'Article2', page: 2 },
    { title: 'Article3', page: 3 },
];
articles1.push({ title: 'Article4', page: 4 });

const articles2: Articles2 = [
    { title: 'Article1', page: 1 },
    { title: 'Article2', page: 2 },
    { title: 'Article3', page: 3 },
];
// articles2.push({ title: 'Article4', page: 4 });
const articles3 = [
    { title: 'Article1', page: 1 },
    { title: 'Article2', page: 2 },
    { title: 'Article3', page: 3 },
] as const;

function f1(arr: ReadonlyArray<string>) {}
function f2(arr: readonly string[]) {}


// https://www.youtube.com/watch?v=BTB3VDkWiOQ
