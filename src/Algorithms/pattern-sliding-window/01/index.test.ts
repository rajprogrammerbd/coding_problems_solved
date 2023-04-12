import maximumSum from './index';

describe('maximumSum', () => {
    it('should return 9', () => {
        const val = maximumSum([2, 1, 5, 1, 3, 2], 3);

        expect(val).toBe(9);
    });

    it('should return 7', () => {
        const val = maximumSum([2, 3, 4, 1, 5], 2);

        expect(val).toBe(7);
    })
});
