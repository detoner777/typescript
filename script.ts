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


// https://www.youtube.com/watch?v=BTB3VDkWiOQ
