import repeatedString from './index';

describe('repeatedString', () => {
    it('should be 7', () => {
        const value = repeatedString('aba', 10);

        expect(value).toBe(7);
    });

    it('should be 6', () => {
        const value = repeatedString('aba', 9);

        expect(value).toBe(6);
    });

    it('should be 1000000000000', () => {
        const value = repeatedString('a', 1000000000000);

        expect(value).toBe(1000000000000);
    });
});