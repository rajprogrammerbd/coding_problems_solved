import countTriplets from '../02/index';

describe('Count the triplets', () => {
    it('should return 2', () => {
        const value = countTriplets([1, 5, 3, 2]);

        expect(value).toBe(2);
    });

    it('should return 0', () => {
        const value = countTriplets([2, 3, 4]);

        expect(value).toBe(0);
    });
});