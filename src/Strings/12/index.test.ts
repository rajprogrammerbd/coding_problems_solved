import encryptString from "./";

describe('encryptString', () => {
    it('should return ba', () => {
        const result = encryptString('aaaaaaaaaaa');

        expect(result).toBe('ba');
    });

    it('should return 1c1b1a', () => {
        const result = encryptString('abc');

        expect(result).toBe('1c1b1a');
    });
});
