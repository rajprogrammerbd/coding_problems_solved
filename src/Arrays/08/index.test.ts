import jumpingOnClouds from './';

describe('jumpingOnClouds', () => {
    it('should return 3', () => {
        const value = jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);

        expect(value).toBe(3);
    });

    it('should return 4', () => {
        const value = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);

        expect(value).toBe(4);
    });
});