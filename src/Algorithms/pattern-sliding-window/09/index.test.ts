import targetedSum from '.';

describe('targetedSum', () => {
    it('should return [1, 3]', () => {
        const value = targetedSum([1, 2, 3, 4, 6], 6);

        expect(value).toEqual(expect.arrayContaining([1, 3]));
    });

    it('should return [0, 2]', () => {
        const value = targetedSum([2, 5, 9, 11], 11);

        expect(value).toEqual(expect.arrayContaining([0, 2]));
    });
});
