import longestSubStringReplacement from '.';

describe('longestSubStringReplacement', () => {
    it('should return 5', () => {
        const value = longestSubStringReplacement("aabccbb", 2);

        expect(value).toBe(5);
    });

    it('should return 4', () => {
        const value = longestSubStringReplacement("abbcb", 1);

        expect(value).toBe(4);
    });

    it('should return 3', () => {
        const value = longestSubStringReplacement("abccde", 1);

        expect(value).toBe(3);
    });
});
