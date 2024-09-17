import AdjacencyList, { INTRODUCTION } from "./index2";

type IExpected = Partial<Record<INTRODUCTION, INTRODUCTION[]>>;

it('AdjacencyList testing', () => {
    const g = new AdjacencyList();

    g.addVertex('A', 'E');
    g.addVertex('A');
    g.addVertex('D');
    g.addVertex('E');
    g.addVertex('F', 'E', 'D', 'A');
    g.addVertex('C')
    g.addVertex('B', 'A', 'C', 'D', 'E', 'F');

    const map = g.list;

    const expected: IExpected = {
        A: ['F', 'B'],
        D: [ 'F', 'B' ],
        E: [ 'F', 'B' ],
        F: [ 'E', 'D', 'A', 'B' ],
        C: ['B'],
        B: [ 'A', 'C', 'D', 'E', 'F' ]
    }

    for (const [key, value] of map.entries()) {
        const keyExisted = expected[key];

        if (!keyExisted) {
            throw new Error(`key ${key} doesn't exists`);
        }

        expect(keyExisted.length).toBe(value.length);

        for (let i = 0; i < value.length; i++) {
            const valueEle = value[i];
            const keyFoundEle = keyExisted[i];

            expect(valueEle).toBe(keyFoundEle);
        }
    }
});
