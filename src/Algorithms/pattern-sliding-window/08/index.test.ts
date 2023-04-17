import windowContainSubstring from '.';

describe('windowContainSubstring', () => {
    it('should return "abdec"', () => {
        const value = windowContainSubstring("aabdec", "abc");

        expect(value).toBe('abdec');
    });

    it('should return "abc"', () => {
        const value = windowContainSubstring("abdabca", "abc");

        expect(value).toBe('abc');
    });

    it('should return ""', () => {
        const value = windowContainSubstring("adcad", "abc");

        expect(value).toBe('');
    });
});
