import convertRomanNumberToIntegers from "./index";

describe("convertRomanNumberToIntegers", () => {
    it('should return 9 as a value', () => {
        const result = convertRomanNumberToIntegers('IX');

        expect(result).toBe(9);
    });

    it('should return 40', () => {
        const result = convertRomanNumberToIntegers('XL');

        expect(result).toBe(40);
    });

    it('should return 1904', () => {
        const result = convertRomanNumberToIntegers('MCMIV');

        expect(result).toBe(1904);
    });
});
