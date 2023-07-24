import diagonalDifference from './index';

describe('diagonalDifference', () => {
    it('should return 15', () => {
        const value = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);

        expect(value).toBe(15);
    });

    it('should return 2', () => {
        const value = diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]);

        expect(value).toBe(2);
    });
});
