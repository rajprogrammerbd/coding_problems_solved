import fruitsIntoBaskets from './index';

describe('fruitsIntoBaskets', () => {
    it('should return 3', () => {
        const value = fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']);

        expect(value).toBe(3);
    });

    it('should return 5', () => {
        const value = fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']);

        expect(value).toBe(5);
    });
});
