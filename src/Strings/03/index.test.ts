import validPalindrome, { validPalindromeMiddle, validPalindromeDouble } from '.';

describe('validPalindrome', () => {
    it('should be returned true', () => {
        const value = validPalindrome('aabaa');
        const middle = validPalindromeMiddle('aabaa');
        const double = validPalindromeDouble('aabaa');

        expect(double).toBeTruthy();
        expect(middle).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should be returned true', () => {
        const value = validPalindrome('aabbaa');
        const middle = validPalindromeMiddle('aabbaa');
        const double = validPalindromeDouble('aabbaa');

        expect(double).toBeTruthy();
        expect(middle).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should be returned false', () => {
        const value = validPalindrome('abc');
        const middle = validPalindromeMiddle('abc');
        const double = validPalindromeDouble('abc');

        expect(double).toBeFalsy();
        expect(middle).toBeFalsy();
        expect(value).toBeFalsy();
    });

    it('should be returned true', () => {
        const value = validPalindrome('a');
        const middle = validPalindromeMiddle('a');
        const double = validPalindromeDouble('a');

        expect(double).toBeTruthy();
        expect(middle).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should be returned true', () => {
        const value = validPalindrome('');
        const middle = validPalindromeMiddle('');
        const double = validPalindromeDouble('');

        expect(double).toBeTruthy();
        expect(middle).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should be returned true', () => {
        const value = validPalindrome('A man, a plan, a canal: Panama');
        const middle = validPalindromeMiddle('A man, a plan, a canal: Panama');
        const double = validPalindromeDouble('A man, a plan, a canal: Panama');

        expect(double).toBeTruthy();
        expect(middle).toBeTruthy();
        expect(value).toBeTruthy();
    });
});