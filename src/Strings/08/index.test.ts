import findLongestPrefix from "./";

describe('findLongestPrefix', () => {
    it('should return "gee"', () => {
        const result = findLongestPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]);

        expect(result).toBe('gee');
    });

    it('should return -1', () => {
        const result = findLongestPrefix(["hello", "world"]);

        expect(result).toBe(-1);
    });

    it('should return -1', () => {
        const result = findLongestPrefix(["hello", "hello"]);

        expect(result).toBe('hello');
    });
});
