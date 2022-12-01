import kadanes from './';

describe('kadanes', () => {
    it('should be return 7', () => {
        const value = kadanes([4, -1, 2, -7, 3, 4]);

        expect(value).toBe(7);
    });
});
