import validPalindrome from '.';

describe('validPalindrome', () => {
    it('should be returned true', () => {
        const value = validPalindrome('aabaa');

        expect(value).toBeTruthy();
    });

    it('should be returned true', () => {
        const value = validPalindrome('aabbaa');

        expect(value).toBeTruthy();
    });

    it('should be returned false', () => {
        const value = validPalindrome('abc');

        expect(value).toBeFalsy();
    });

    it('should be returned true', () => {
        const value = validPalindrome('a');

        expect(value).toBeTruthy();
    });

    it('should be returned true', () => {
        const value = validPalindrome('');

        expect(value).toBeTruthy();
    });

    it('should be returned true', () => {
        const value = validPalindrome('A man, a plan, a canal: Panama');

        expect(value).toBeTruthy();
    });
});