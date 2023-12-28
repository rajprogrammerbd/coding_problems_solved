import productExceptSelf from "./index";

describe('productExceptSelf', () => {
    it('should return [24, 12, 8, 6]', () => {
        const result = productExceptSelf([1, 2, 3, 4]);

        expect(result).toEqual(expect.arrayContaining([24, 12, 8, 6]));
    });

    it('should return [0, 0, 9, 0, 0]', () => {
        const result = productExceptSelf([-1, 1, 0, -3, 3]);

        expect(result).toEqual(expect.arrayContaining([0, 0, 9, 0, 0]));
    });
});

