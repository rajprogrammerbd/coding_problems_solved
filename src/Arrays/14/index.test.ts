import validateSubsequence from '.';

describe('validateSubsequence', () => {
    it('should return true', () => {
        const value = validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);

        expect(value).toBeTruthy();
    });
});
