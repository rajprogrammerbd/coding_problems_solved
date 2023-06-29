import maxPairwiseProduct, { optimizedSolutionForMaxPairwiseProduct } from './';

describe("maxPairwiseProduct brute force solution", () => {
    it('should return 6', () => {
        const value = maxPairwiseProduct([1, 2, 3]);

        expect(value).toBe(6);
    });

    it('should return 140', () => {
        const value = maxPairwiseProduct([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]);

        expect(value).toBe(140);
    });
});

describe("maxPairwiseProduct optimizing solution", () => {
    it('should return 6', () => {
        const value = optimizedSolutionForMaxPairwiseProduct([1, 2, 3]);

        expect(value).toBe(6);
    });

    it('should return 140', () => {
        const value = optimizedSolutionForMaxPairwiseProduct([7, 5, 14, 2, 8, 8, 10, 1, 2, 3]);

        expect(value).toBe(140);
    });

    it('should return 140', () => {
        const value = optimizedSolutionForMaxPairwiseProduct([7]);

        expect(value).toBe(0);
    });
});
