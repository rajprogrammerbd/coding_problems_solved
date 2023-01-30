import kadanesAlgo from './';

describe('Kadanes algorithm test cases', () => {
    it('should return 7', () => {
        const value = kadanesAlgo([4, -1, 2, -7, 3, 4]);

        expect(value).toBe(7);
    });
});