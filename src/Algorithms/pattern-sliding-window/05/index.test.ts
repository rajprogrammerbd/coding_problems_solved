import noRepeatSubString from '.';

describe('noRepeatSubString', () => {
    it('should return 3', () => {
        const value = noRepeatSubString('aabccbb');

        expect(value).toBe(3);
    });

    it('should return 2', () => {
        const value = noRepeatSubString('abbbb');

        expect(value).toBe(2);
    });

    it('should be return 3', () => {
        const value = noRepeatSubString('abccde');

        expect(value).toBe(3);
    });
});
