import longestLengthSubString, { longestLengthSubStringBruteForce } from './';

describe('longestLengthSubString', () => {
    it('should return 3', () => {
        const value = longestLengthSubString('abccabb');
        const brute = longestLengthSubStringBruteForce('abccabb');

        expect(brute).toBe(3);
        expect(value).toBe(3);
    });

    it('should be 1', () => {
        const value = longestLengthSubString('cccccccc');
        const brute = longestLengthSubStringBruteForce('cccccccc');

        expect(brute).toBe(1);
        expect(value).toBe(1);
    });

    it('should be 4', () => {
        const value = longestLengthSubString('abcbda');
        const brute = longestLengthSubStringBruteForce('abcbda');

        expect(brute).toBe(4);
        expect(value).toBe(4);
    });
    

    it('should be 0', () => {
        const value = longestLengthSubString('');
        const brute = longestLengthSubStringBruteForce('');

        expect(brute).toBe(0);
        expect(value).toBe(0);
    });
});
