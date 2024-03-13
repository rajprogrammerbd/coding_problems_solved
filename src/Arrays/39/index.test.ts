import intervalsIntersection from "./index";

describe('intervalsIntersection', () => {
    it('should return [[2, 3], [5, 6], [7, 7]]', () => {
        const result = intervalsIntersection([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]);

        const expected = [[2, 3], [5, 6], [7, 7]];

        expect(result.length).toBe(expected.length);
        for (let i = 0; i < expected.length; i++) {
            expect(result[i]).toEqual(expect.arrayContaining(expected[i]));
        }
    });

    it('should return [[5, 7], [9, 10]]', () => {
        const result = intervalsIntersection([[1, 3], [5, 7], [9, 12]], [[5, 10]]);

        const expected = [[5, 7], [9, 10]];

        expect(result.length).toBe(expected.length);
        for (let i = 0; i < expected.length; i++) {
            expect(result[i]).toEqual(expect.arrayContaining(expected[i]));
        }
    });
});
