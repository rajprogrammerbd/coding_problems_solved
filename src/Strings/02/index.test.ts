import longestLengthSubString from './';

describe('longestLengthSubString', () => {
    it('should return 3', () => {
        const value = longestLengthSubString('abccabb');

        expect(value).toBe(3);
    });

    it('should be 1', () => {
        const value = longestLengthSubString('cccccccc');

        expect(value).toBe(1);
    });

    it('should be 4', () => {
        const value = longestLengthSubString('abcbda');

        expect(value).toBe(4);
    });
    

    it('should be 0', () => {
        const value = longestLengthSubString('');

        expect(value).toBe(0);
    });
});
