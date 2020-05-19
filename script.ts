function a(x: number ,y: number): number {
	return x + y;
}

let b = (x: number, y: number): number => x + y;

// /Сигнатура:

let c: (x: number, y: number) => number;

c = function (x: number, y: number): number {
	return x + y;
}
///void если не будем использовать return

function d(x: number, y: number): void {
	console.log(x +y)
}
/// функция которая никогда не завершиться(бесконечный цикл)

function e (x: string): never {
	throw new Error(x)
}

// /Перегрузка функций:

// function f(x: any, y: any): any {
// 	if (typeof x === 'number') {
// 		return x + y
// 	} else {
// 		return `${x} ${y}`
// 	}
// 	}

function g(x: number, y: number):number;
function g(x: string, y: number):string;
function g(x: any, y: any): any {
	if (typeof x === 'number') {
		return x + y
	} else {
		return `${x} ${y}`
	}
	}

	console.log(g(1, 2));
	console.log(g('sds', 2));

	
		







