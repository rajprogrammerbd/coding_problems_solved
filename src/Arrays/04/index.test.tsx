import mostWaterContainer from './';

describe('mostWaterContainer', () => {
    it('should return 24',  () => {
        const value = mostWaterContainer([1, 8, 6, 2, 9, 4]);

        expect(value).toBe(24);
    });

    it('should return 28',  () => {
        const value = mostWaterContainer([7, 1, 2, 3, 9]);

        expect(value).toBe(28);
    });

    it('should return 32',  () => {
        const value = mostWaterContainer([6, 9, 3, 4, 5, 8]);

        expect(value).toBe(32);
    });
});
