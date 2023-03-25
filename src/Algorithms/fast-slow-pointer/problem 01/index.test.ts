import happyNumber from './';

describe('happyNumber', () => {
    it('should return true', () => {
        const value = happyNumber(23);

        expect(value).toBeTruthy();
    });

    it('should be return false', () => {
        const value = happyNumber(12);

        expect(value).toBeTruthy();
    });
});