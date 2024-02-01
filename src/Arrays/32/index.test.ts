import ransomNode from './index';

describe('ransomNode', () => {
    it('should return false', () => {
        const result = ransomNode("a", "b");

        expect(result).toBeFalsy();
    });

    it('should return false', () => {
        const result = ransomNode("aa", "ab");

        expect(result).toBeFalsy();
    });

    it('Should return true', () => {
        const result = ransomNode("aa", "aab");

        expect(result).toBeTruthy();
    });
});
