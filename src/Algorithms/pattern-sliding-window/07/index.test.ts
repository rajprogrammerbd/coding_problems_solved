import permutationPattern from '.';

describe('permutationPattern', () => {
    it('should return true', () => {
        const value = permutationPattern("oidbcaf", "abc");

        expect(value).toBeTruthy();
    });

    it('should return false', () => {
        const value = permutationPattern("odicf", "dc");

        expect(value).toBeFalsy();
    });

    it('should return true', () => {
        const value = permutationPattern("bcdxabcdy", "bcdyabcdx");

        expect(value).toBeTruthy();
    });

    it('should return true', () => {
        const value = permutationPattern("aaacb", "abc");

        expect(value).toBeTruthy();
    });
});
