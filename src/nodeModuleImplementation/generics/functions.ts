console.clear();
// Use of generics in Function.

// Example of non-generics function
let func;
let values: any;

func = function(value: string): string {
    return value;
}

values = func('hello world');

// Example of simple generics function
func = function<T>(arg: T): T {
    return arg;
}

values = func<number>(10);
values = func('hello world!');

// Example of using generics function used to set in externally set type in it.
func = function<T>(arg: T): T {
    return arg;
}

let funcIdentity1: <Type>(arg: Type) => Type = func;
let funcIdentity2: { <S>(arg: S): S } = func;

// Example of using external define of generics to interface.
interface IFuncIdentity1 {
    <S>(arg: S): S;
}

interface IFuncIdentity2<T> {
    (arg: T): number;
    (arg: T): T;
}

interface IFuncIdentity3<T> {
    (arg: T): number;
}

let funcIdentity3: IFuncIdentity1 = func;
let funcIdentity4: IFuncIdentity2<string> = func;
let funcIdentity5: IFuncIdentity3<string> = function<T>(arg: T): number {
    return 10;
}

