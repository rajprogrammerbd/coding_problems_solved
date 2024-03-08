import happyNumber from "./index";

describe('happyNumber', () => {
    it('should return true', () => {
        const result = happyNumber(23);

        expect(result).not.toBeFalsy();
    });

    it('should return false', () => {
        const result = happyNumber(12);

        expect(result).toBeFalsy();
    });
});
