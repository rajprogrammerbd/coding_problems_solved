import validationSubsequent from './';

describe('validationSubsequent', () => {
    it('should return true', () => {
        const value = validationSubsequent([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);

        expect(value).toBeTruthy();
    });

    it('should return false', () => {
        const value = validationSubsequent([5, 1, 22, 25, 6, -1, 8, 10], [8, 6, 5, 1]);

        expect(value).toBeFalsy();
    });
});
