import isMatch from './';

describe('isMatch', () => {
    it('should return false', () => {
        const value = isMatch("aa", "a");

        expect(value).toBeFalsy();
    });

    it('should return true', () => {
        const value = isMatch("aa", "*");

        expect(value).toBeTruthy();
    });

    it('should be falsy', () => {
        const value = isMatch("cb", "?a");

        expect(value).toBeFalsy();
    });
});