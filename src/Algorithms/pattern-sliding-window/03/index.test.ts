import longestSubstring from '.';

describe('longestSubstring', () => {
    it('should return 4', () => {
        const value = longestSubstring('araaci', 2);

        expect(value).toBe(4);
    });

    it('should return 2', () => {
        const value = longestSubstring('araaci', 1);

        expect(value).toBe(2);
    });

    it('should return 5', () => {
        const value = longestSubstring('cbbebi', 3);

        expect(value).toBe(5);
    });
});