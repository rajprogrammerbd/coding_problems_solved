import { quickSort } from ".";

describe('quickSort', () => {
    it('sort the value', () => {
        const givth = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

        const result = quickSort(givth);
        const total = 31;

        expect(result.length).toBe(total);

        for (let i = 0; i < total; i++) {
            expect(result[i]).toBe(i);
        }
    });
});