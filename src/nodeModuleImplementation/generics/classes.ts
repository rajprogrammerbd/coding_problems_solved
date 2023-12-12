class GenericNumbers<NumType> {
    num!: NumType;
    add!: (x: NumType, y: NumType) => NumType;
}

let myGenricNumber = new GenericNumbers<string>();

myGenricNumber.num = 'hello world!';
myGenricNumber.add = function (x: string, y: string) {
    return x + y;
}

class Animals {
    private name: string;

    constructor () {
        this.name = 'animal';
    }
}

class Dogs {
    private name: string;

    constructor () {
        this.name = 'The dog';
    }
}

class Cats extends Animals {
    private names: string;

    constructor () {
        super();

        this.names = 'My cats';
    }
}

function createConstructor<CL extends Animals>(C: { new (): CL }): CL {
    return new C();
}

createConstructor(Cats);
// createConstructor(Dogs);
