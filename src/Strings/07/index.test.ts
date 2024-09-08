import reverseString from "./";

describe('reverseString', () => {
    it('should return "much very programming love i"', () => {
        const reversedString = reverseString('i love programming very much');

        expect(reversedString).toBe('much very programming love i');
    });
});