import validateSubsequence from "./index";

describe("validateSubsequence", () => {
    it('should return true', () => {
        const result = validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);

        expect(result).toBe(true);
    });
});
