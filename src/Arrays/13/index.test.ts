import twoSum from '.';

describe('twoSum', () => {
    it('should return [11, -1]', () => {
        const value = twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

        expect(value).toEqual(expect.arrayContaining([11, -1]));
    });
});
