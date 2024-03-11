import insertInterval from "./index";


describe("insertInterval", () => {
    it('should return [[1,3], [4,7], [8,12]]', () => {
        const result = insertInterval([[1,3], [5,7], [8,12]], [4,6]);

        const expected = [[1,3], [4,7], [8,12]];

        expect(result.length).toBe(expected.length);

        for (let i = 0; i < expected.length; i++) {
            expect(result[i]).toEqual(expect.arrayContaining(expected[i]));
        }
    });

    it('should return [[1,3], [4,12]]', () => {
        const result = insertInterval([[1,3], [5,7], [8,12]], [4,10]);

        const expected = [[1,3], [4,12]];

        expect(result.length).toBe(expected.length);

        for (let i = 0; i < expected.length; i++) {
            expect(result[i]).toEqual(expect.arrayContaining(expected[i]));
        }
    });

    it('should return [[1,4], [5,7]]', () => {
        const result = insertInterval([[2,3],[5,7]], [1,4]);

        const expected = [[1,4], [5,7]];

        expect(result.length).toBe(expected.length);

        for (let i = 0; i < expected.length; i++) {
            expect(result[i]).toEqual(expect.arrayContaining(expected[i]));
        }
    });
});
