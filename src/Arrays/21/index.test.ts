import rotateArray from './';

describe('rotateArray', () => {
    it('should return [2, 3, 4, 5, 1]', () => {
        const arr = [1, 2, 3, 4, 5];

        const result = rotateArray(arr, 1);
        const expectedResult = [2, 3, 4, 5, 1];

        if (expectedResult.length === result.length) {
            for (let i = 0; i < expectedResult.length; i++) {
                expect(result[i]).toBe(expectedResult[i]);
            }
        } else throw new Error('Get more items than expected');
    });

    it('should return [4, 5, 1, 2, 3]', () => {
        const arr = [1, 2, 3, 4, 5];

        const result = rotateArray(arr, 3);
        const expectedResult = [4, 5, 1, 2, 3];

        if (expectedResult.length === result.length) {
            for (let i = 0; i < expectedResult.length; i++) {
                expect(result[i]).toBe(expectedResult[i]);
            }
        } else throw new Error('Get more items than expected');
    });
});
