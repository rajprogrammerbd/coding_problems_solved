import almostPalindrome, { almostPalindromeImplementation } from './';

describe('almostPalindrome', () => {
    it('should return true', () => {
        const value = almostPalindrome('raceacar');
        const anotherValue = almostPalindromeImplementation('raceacar');

        expect(anotherValue).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should return true', () => {
        const value = almostPalindrome('abccdba');
        const anotherValue = almostPalindromeImplementation('abccdba');

        expect(anotherValue).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should return false', () => {
        const value = almostPalindrome('abcdefdba');
        const anotherValue = almostPalindromeImplementation('abcdefdba');

        expect(anotherValue).toBeFalsy();
        expect(value).toBeFalsy();
    });

    it('should return true', () => {
        const value = almostPalindrome('');
        const anotherValue = almostPalindromeImplementation('');

        expect(anotherValue).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should return true', () => {
        const value = almostPalindrome('a');
        const anotherValue = almostPalindromeImplementation('a');

        expect(anotherValue).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should return true', () => {
        const value = almostPalindrome('ab');
        const anotherValue = almostPalindromeImplementation('ab');

        expect(anotherValue).toBeTruthy();
        expect(value).toBeTruthy();
    });

    it('should return false', () => {
        const value = almostPalindrome('abc');
        const anotherValue = almostPalindromeImplementation('abc');

        expect(anotherValue).toBeFalsy();
        expect(value).toBeFalsy();
    });

    it('should return true', () => {
        const value = almostPalindrome('aba');
        const anotherValue = almostPalindromeImplementation('aba');

        expect(anotherValue).toBeTruthy();
        expect(value).toBeTruthy();
    });
});
