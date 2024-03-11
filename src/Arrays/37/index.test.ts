import mergeInterval from "./index";

describe('mergeInterval', () => {
    it('should return [[1, 5], [7, 9]]', () => {
        const result = mergeInterval([[1,4], [2,5], [7,9]]);

        const expected = [[1, 5], [7, 9]];

        for (let i = 0; i < expected.length; i++) {
            expect(result[i]).toEqual(expect.arrayContaining(expected[i]));
        }
    });
});
