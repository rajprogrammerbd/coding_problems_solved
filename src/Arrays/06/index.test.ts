import sortedSquaredArray from './';

describe('sortedSquaredArray', () => {
    it('should return [1, 4, 9, 25, 36, 64, 81]', () => {
        const value = sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]);
        
        expect(value[0]).toBe(1);
        expect(value[1]).toBe(4);
        expect(value[2]).toBe(9);
        expect(value[3]).toBe(25);
        expect(value[4]).toBe(36);
        expect(value[5]).toBe(64);
        expect(value[6]).toBe(81);
    });

    it('should return [1, 1, 4, 9]', () => {
        const value = sortedSquaredArray([-2, -1, 1, 3]);

        expect(value[0]).toBe(1);
        expect(value[1]).toBe(1);
        expect(value[2]).toBe(4);
        expect(value[3]).toBe(9);
    });
});