import containsDuplicate from './index';

describe('containsDuplicate', () => {
    it('should return true', () => {
        const result = containsDuplicate([1, 2, 3, 1]);

        expect(result).toBeTruthy();
    });

    it('should return false', () => {
        const result = containsDuplicate([1, 2, 3, 4]);

        expect(result).toBeFalsy();
    });

    it('should return true', () => {
        const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);

        expect(result).toBeTruthy();
    });
});
