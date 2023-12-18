import topKFrequent from './index';

describe('topKFrequent', () => {
    it('should return [1,2]', () => {
        const result = topKFrequent([1,1,1,2,2,3], 2);

        const expected = [1, 2];

        expect(result).toEqual(expect.arrayContaining(expected));
    });
});
