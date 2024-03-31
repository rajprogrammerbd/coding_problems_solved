interface IPromise {
    id: number;
    name: string;
}

const p = new Promise<IPromise>(() => {});

type IResult = Awaited<Promise<IPromise>>;
type IOptional = Partial<IPromise>;
type IRequired = Required<IOptional>;
type IReadOnly = Readonly<IRequired>;
type IKeys = "name" | "age" | "profession";
type IValues = "Raj Dutta" | 28 | "Web Developer";

type IRecords = Record<IKeys, IValues>;
let cats: IRecords = {
    age: 28,
    name: 'Raj Dutta',
    profession: 'Web Developer'
}
console.log(cats);
type IPick = Pick<IPromise, "name">;
type IOmit = Omit<IPromise, "name">;

type IType = "name" | "age" | "description";
type IExtract = Extract<IType, "name">;
type IExclude = Exclude<IType, "name" | "description">;
type INotNullable = NonNullable<string | number | undefined | null>;

function paramitizedFu(a: boolean, b: number, c: string) {}

type IParameter = Parameters<typeof paramitizedFu>;

class Persons {
    constructor (firstName: string, lastName: string) {}
}

type IConstractorParameters = ConstructorParameters<typeof Persons>;

function myFunc(): number {
    return 0;
}

type IReturnType = ReturnType<typeof myFunc>;
