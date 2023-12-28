import maxProfit from ".";


describe('maxProfit', () => {
    it('should return 5', () => {
        const result = maxProfit([7,1,5,3,6,4]);

        expect(result).toBe(5);
    });

    it('should return 0', () => {
        const result = maxProfit([7,6,4,3,1]);

        expect(result).toBe(0);
    });

    it('should return 0', () => {
        const result = maxProfit([]);

        expect(result).toBe(0);
    });
});
