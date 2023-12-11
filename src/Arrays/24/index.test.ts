import { trappingWaterOptimalSolution } from './';

type IObject = {
    arguments: number[];
    expectedResult: number;
}

const object: IObject[] = [
    {
        arguments: [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2],
        expectedResult: 8
    },
    {
        arguments: [],
        expectedResult: 0
    },
    {
        arguments: [3],
        expectedResult: 0,
    },
    {
        arguments: [3, 4, 3],
        expectedResult: 0
    }
];

describe('trappingRainWaterOptimalSolution - Optimal solution', () => {
    for (let i = 0; i < object.length; i++) {
        it(`should return ${object[i].expectedResult} - optimal solution`, () => {
            const result = trappingWaterOptimalSolution(object[i].arguments);

            expect(result).toBe(object[i].expectedResult);
        });
    }
});