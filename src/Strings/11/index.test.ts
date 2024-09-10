import getSequence from "./index";

describe("getSequence", () => {
    it('should be true all value', () => {
        const result = getSequence([["a", "b", "c", "e", "e"], ["a", "c", "d", "e", "e", "d", "b"]]);

        const expected = [true];

        expect(result.length).toBe(expected.length);
        expect(result[0]).toBe(expected[0]);
    });

    it('should be false', () => {
        const result = getSequence([["s", "l", "j", "f", "f", "s", "a", "j", "e"], ["s", "l", "j", "s", "j", "e"]]);

        const expected = [false];

        expect(result.length).toBe(expected.length);
        expect(result[0]).toBe(expected[0]);
    });

    it('should be true', () => {
        const result = getSequence([["s", "a", "f", "d", "d", "a", "d", "f", "s"], ["f", "a", "m", "a", "f", "m", "s", "s"]]);
        const expected = [true];

        expect(result.length).toBe(expected.length);

        expect(result[0]).toBe(expected[0]);
    });
});
