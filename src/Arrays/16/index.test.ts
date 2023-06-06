import chunk from './';

describe('chunk', () => {
    it('should return [[1, 2], [3, 4]]', () => {
        const value = chunk([1, 2, 3, 4], 2);

        const expectedResult = [[1, 2], [3, 4]];


        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value[i].length; j++) {
                expect(value[i][j]).toBe(expectedResult[i][j]);
            }
        }
    });

    it('should return [[1, 2], [3, 4], [5]]', () => {
        const value = chunk([1, 2, 3, 4, 5], 2);

        const expectedResult = [[1, 2], [3, 4], [5]];

        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value[i].length; j++) {
                expect(value[i][j]).toBe(expectedResult[i][j]);
            }
        }
    });

    it('should return [[1, 2, 3], [4, 5, 6], [7, 8]]', () => {
        const value = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

        const expectedResult = [[1, 2, 3], [4, 5, 6], [7, 8]];

        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value[i].length; j++) {
                expect(value[i][j]).toBe(expectedResult[i][j]);
            }
        }
    });

    it('should return [[1, 2, 3, 4], [5]]', () => {
        const value = chunk([1, 2, 3, 4, 5], 4);

        const expectedResult = [[1, 2, 3, 4], [5]];

        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value[i].length; j++) {
                expect(value[i][j]).toBe(expectedResult[i][j]);
            }
        }
    });

    it('should return [[1, 2, 3, 4, 5]]', () => {
        const value = chunk([1, 2, 3, 4, 5], 10);

        const expectedResult = [[1, 2, 3, 4, 5]];

        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value[i].length; j++) {
                expect(value[i][j]).toBe(expectedResult[i][j]);
            }
        }
    });
});