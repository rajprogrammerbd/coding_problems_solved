import { mostContainerWaterBruteForce, mostContainerWaterOptimalSolution } from './';

describe('mostContainerWaterBruteForce - Brute Force Solution', () => {
    // Brute Force Solution test.

    it('should return 28 - Brute Force Solution', () => {
        const value = mostContainerWaterBruteForce([7, 1, 8, 3, 9]);

        expect(value).toBe(28);
    });

    it('should return 0 - Brute Force Solution', () => {
        const value = mostContainerWaterBruteForce([]);

        expect(value).toBe(0);
    });

    it('should return 0 - Brute Force Solution', () => {
        const value = mostContainerWaterBruteForce([7]);

        expect(value).toBe(0);
    });

    it('should return 32 - Brute Force Solution', () => {
        const value = mostContainerWaterBruteForce([6, 9, 3, 4, 5, 8]);

        expect(value).toBe(32);
    });
});

describe('mostContainerWaterOptimalSolution - Optimal Solution', () => {
    // Optimal Solution test.

    it('should return 28 - Optimal Solution', () => {
        const value = mostContainerWaterOptimalSolution([7, 1, 8, 3, 9]);

        expect(value).toBe(28);
    });

    it('should return 0 - Optimal Solution', () => {
        const value = mostContainerWaterOptimalSolution([]);

        expect(value).toBe(0);
    });

    it('should return 0 - Optimal Solution', () => {
        const value = mostContainerWaterOptimalSolution([7]);

        expect(value).toBe(0);
    });

    it('should return 32 - Optimal Solution', () => {
        const value = mostContainerWaterOptimalSolution([6, 9, 3, 4, 5, 8]);

        expect(value).toBe(32);
    });
});