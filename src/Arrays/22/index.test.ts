import { twoSumBruteForce, twoSumOptimal } from './';

// Test Brute Force Solution
describe('twoSumBruteForce - Brute Force Solution', () => {
    it('should return [9, 2]', () => {
        const result = twoSumBruteForce([1, 3, 7, 9, 2], 11);

        const expectedResult = [9, 2];

        expect(result).toEqual(expect.arrayContaining(expectedResult));
    });

    it('should return null', () => {
        const result = twoSumBruteForce([1, 3, 7, 9, 2], 20);

        expect(result).toBeNull();
    });
});

describe('twoSumOptimal - Optimal Solution', () => {
    it('should return [9, 2]', () => {
        const result = twoSumOptimal([1, 3, 7, 9, 2], 11);

        const expectedResult = [9, 2];

        expect(result).toEqual(expect.arrayContaining(expectedResult));
    });

    it('should return null', () => {
        const result = twoSumOptimal([1, 3, 7, 9, 2], 20);

        expect(result).toBeNull();
    });
});