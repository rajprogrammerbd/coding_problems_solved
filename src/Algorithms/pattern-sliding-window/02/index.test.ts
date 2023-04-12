import smallestSubArray from './';

describe('smallestSubArray', () => {
    it('should return 2', () => {
        const value = smallestSubArray([2, 1, 5, 2, 3, 2], 7);

        expect(value).toBe(2);
    });

    it('should be return 1', () => {
        const value = smallestSubArray([2, 1, 5, 2, 8], 7);

        expect(value).toBe(1);
    });

    it('should be return 3', () =>  {
        const value = smallestSubArray([3, 4, 1, 1, 6], 8);

        expect(value).toBe(3);
    });
})