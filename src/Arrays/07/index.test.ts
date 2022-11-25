import rainWater from '.';

describe('rainWater', () => {
    it('should return 8', () => {
        const value = rainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);

        expect(value).toBe(8);
    });

    it('should return 0', () => {
        const value = rainWater([]);

        expect(value).toBe(0);
    });

    it('should be zero', () => {
        const value = rainWater([3]);

        expect(value).toBe(0);
    });

    it('should be either 0', () => {
        const value = rainWater([3, 4, 3]);

        expect(value).toBe(0);
    });
})