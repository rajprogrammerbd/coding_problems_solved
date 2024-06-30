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

type IObject = {
    name?: string;
    age: number;
}

type IOptionalObjectType = Partial<IObject>;
type IOptionalObjectRequired = Required<IObject>;

const obj: IOptionalObjectType = {
    name: 'Raj Dutta'
}

const obj0: IOptionalObjectRequired = {
    age: 27,
    name: "Raj Dutta"
}

type IObjectRecordType = Record<"name", string>;

const obj2: IObjectRecordType = {
    name: 'Raj Dutta',
    // age: 27 If we add this value so then typescript would throw an error because of Record.
}

interface Person {
    name: string;
    age: number;
    occupation: string;
}

type PersonOmitType = Omit<Person, 'age' | 'occupation'>;

const obj3: PersonOmitType = {
    name: "Raj Dutta"
}


type PersonPickType = Pick<Person, "age" | "occupation">;

const obj4: PersonPickType = {
    age: 27,
    occupation: "Web Developer"
}

type ThreeValueTypes = "name" | "age" | "occupation";

type PersonExclude = Exclude<ThreeValueTypes, "age" | "occupation">; // Exclude only works with union type.

const obj5: PersonExclude = "name";

function calculate(obj: { x: number, y: number }) {
    return obj.x + obj.y;
}

type ReturnedTypedFn = ReturnType<typeof calculate>;
type ParametersTypedFn = Parameters<typeof calculate>;
type ReadonlyTypedFn = Readonly<ParametersTypedFn>;

const obj6: Readonly<ReadonlyTypedFn[0]> = {
    x: 0,
    y: 0
}

// obj6.x = 10; This can't be done because of Readonly.