import almostPalindrome from './';

describe('almostPalindrome', () => {
    it('should return true', () => {
        const value = almostPalindrome('raceacar');

        expect(value).toBeTruthy();
    });

    it('should return true', () => {
        const value = almostPalindrome('abccdba');

        expect(value).toBeTruthy();
    });

    it('should return false', () => {
        const value = almostPalindrome('abcdefdba');

        expect(value).toBeFalsy();
    });

    it('should return true', () => {
        const value = almostPalindrome('');
        
        expect(value).toBeTruthy();
    });

    it('should return true', () => {
        const value = almostPalindrome('a');

        expect(value).toBeTruthy();
    });

    it('should return true', () => {
        const value = almostPalindrome('ab');

        expect(value).toBeTruthy();
    });
});
