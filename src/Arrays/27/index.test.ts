import optimalSortedSquredArray from './index';

describe('optimalSortedSquredArray', () => {
    it('should return sorted array with square', () => {
        const result = optimalSortedSquredArray([1, 2, 3, 5, 6, 8, 9]);

        expect(result).toEqual(expect.arrayContaining([1, 4, 9, 25, 36, 64, 81]));
    });

    it('should return sorted', () => {
        const result = optimalSortedSquredArray([-4, 1, 2]);
        const expected_result = [1, 4, 16];

        expect(result.length).toBe(expected_result.length);

        for (let j = 0; j < expected_result.length; j++) {
            expect(result[j]).toBe(expected_result[j]);
        }
    });
});
