import mergeIntervals from './';

describe('mergeIntervals', () => {
    it('should return [[1,5], [7,9]]', () => {
        const val = mergeIntervals([[1,4], [2,5], [7,9]]);

        expect(val[0][0]).toBe(1);
        expect(val[0][1]).toBe(5);
        expect(val[1][0]).toBe(7);
        expect(val[1][1]).toBe(9);
    });

    it('should return [[2,4], [5,9]]', () => {
        const val = mergeIntervals([[6,7], [2,4], [5,9]]);

        expect(val[0][0]).toBe(2);
        expect(val[0][1]).toBe(4);
        expect(val[1][0]).toBe(5);
        expect(val[1][1]).toBe(9);
    });
});