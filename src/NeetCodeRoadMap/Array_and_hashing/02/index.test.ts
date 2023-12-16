import isAnagram from './index';

describe('isAnagram', () => {
    it('should return true', () => {
        const result = isAnagram("anagram", "nagaram");

        expect(result).toBeTruthy();
    });

    it('should return false', () => {
        const result = isAnagram("rat", "car");

        expect(result).toBeFalsy();
    });
});
