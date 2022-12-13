import findMinSubArray from './';

describe('findMinSubArray', () => {
    it('should be 2', () => {
        const value = findMinSubArray([2, 1, 5, 2, 3, 2], 7);

        expect(value).toBe(2);
    });

    it('should be 1', () => {
        const value = findMinSubArray([2, 1, 5, 2, 8], 7);

        expect(value).toBe(1);
    });

    it('should be 3', () => {
        const value = findMinSubArray([3, 4, 1, 1, 6], 8);

        expect(value).toBe(3);
    });
});
