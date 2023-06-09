import { allowedNodeEnvironmentFlags } from 'process';
import matrix from './';

type IObject = {
    arg: number;
    expected: number[][];
}[];

describe('matrix', () => {
    const loop: IObject = [
        {
            arg: 2,
            expected: [[1, 2], [4, 3]]
        },
        {
            arg: 3,
            expected: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
        },
        {
            arg: 4,
            expected: [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
        }
    ];

    for (const obj of loop) {
        it(`should return items of ${obj.expected.toString()}`, () => {
            const value = matrix(obj.arg);

            for (let i = 0; i < value.length; i++) {
                for (let j = 0; j < value[i].length; j++) {
                    expect(value[i][j]).toBe(obj.expected[i][j]);
                }
            }
        });
    }
});
