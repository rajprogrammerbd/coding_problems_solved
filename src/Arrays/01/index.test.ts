import subArraysSum from ".";

describe('Subarray with given sum', () => {
    it('output should be 2, 4', () => {
        const value = subArraysSum([1,2,3,7,5], 12);

        expect(value).toEqual(expect.arrayContaining([2, 4]));
    });

    it('output should be false', () => {
        const value = subArraysSum([1,2,3,7,5], 120);

        expect(value).toBeFalsy();
    });
});