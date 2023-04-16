import sortedSequreArray from '.';

describe('sortedSequreArray', () => {
    it('should return [1, 4, 9, 25, 36, 64, 81]', () => {
        const value = sortedSequreArray([1, 2, 3, 5, 6, 8, 9]);

        expect(value).toEqual(expect.arrayContaining([1, 4, 9, 25, 36, 64, 81]));
    });
});
