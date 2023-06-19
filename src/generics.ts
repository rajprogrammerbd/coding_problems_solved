console.clear();

interface LogginIntendedArray {
    length: number;
}

function loggin<Type extends LogginIntendedArray>(arg: Type): Type {
    return arg;
}

loggin(["Raj", "Dola"]); // this will be removed by the gurbage collector.

function objectSearchKey<O, K extends keyof O>(obj: O, key: K): O[K] {
    return obj[key];
}

const obj1 = {
    x: 1,
    y: 2
}

objectSearchKey(obj1, "x");


function createClass<Type>(className: { new(): Type }): Type {
    return new className();
}

class Person {
    constructor() { }
}

createClass<Person>(Person);

const target = {
    message1: "hello",
    message2: "everyone",
};

const handler2 = {
    get(target: any, prop: any, receiver: any) {
        return "world";
    },
};

const proxy2 = new Proxy(target, handler2);

class Cat {
    public isCute: boolean;

    constructor () {
        this.isCute = true;
    }
}

class Dog extends Cat {}

class Human extends Cat {}

function callClass<A extends Cat>(c: new () => A): A {
    return new c();
}