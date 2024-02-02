import mergeInterval from "./";

describe("mergeInterval", () => {
    it('should return [[1, 5], [7, 9]]', () => {
        const result = mergeInterval([[1, 4], [2, 5], [7, 9]]);

        expect(result[0]).toEqual(expect.arrayContaining([1, 5]));
        expect(result[1]).toEqual(expect.arrayContaining([7, 9]));
    });
});
