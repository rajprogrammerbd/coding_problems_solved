import averageOfSubArrayOfSizeK from ".";

describe('averageOfSubArrayOfSizeK', () => {
    it('should return [2.2, 2.8, 2.4, 3.6, 2.8]', () => {
        const value = averageOfSubArrayOfSizeK(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);

        expect(value[0]).toBe(2.2);
        expect(value[1]).toBe(2.8);
        expect(value[2]).toBe(2.4);
        expect(value[3]).toBe(3.6);
        expect(value[4]).toBe(2.8);
    });
});