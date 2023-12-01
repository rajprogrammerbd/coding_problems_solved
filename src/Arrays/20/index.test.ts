import findingAverage from './';

describe('findingAverage', () => {
    it('should return return [2.2, 2.8, 2.4, 3.6, 2.8]', () => {
        const average = findingAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);

        expect(average.length).toBe(5);

        expect(average[0]).toBe(2.2);
        expect(average[1]).toBe(2.8);
        expect(average[2]).toBe(2.4);
        expect(average[3]).toBe(3.6);
        expect(average[4]).toBe(2.8);
    });
});