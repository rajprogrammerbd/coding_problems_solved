import findTwoSum from './';

describe('twoSum', () => {
    it('should be [3, 4] of array index', () => {
        const value = findTwoSum([1, 3, 7, 9, 2], 11);
        
        expect(value).toEqual(expect.arrayContaining([3, 4]));
    });

    it('should be null', () => {
        const value = findTwoSum([], 11);
        
        expect(value).toBeNull();
    });

    it('should be null', () => {
        const value = findTwoSum([1], 1);
        
        expect(value).toBeNull();
    });

    it('should be [0, 1]', () => {
        const value = findTwoSum([1, 6], 7);
        
        expect(value).toEqual(expect.arrayContaining([0, 1]));
    });
});