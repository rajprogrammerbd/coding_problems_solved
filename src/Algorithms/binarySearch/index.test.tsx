import binarySearch from ".";

describe('binarySearch', () => {
    it('should found the value', () => {
        const search = binarySearch([0, 2, 3, 5, 6, 7, 8, 9, 10, 15, 20], 15);
    
        expect(search).toBe(15);
    });

    it('should not found', () => {
        const search = binarySearch([0, 2, 3, 5, 6, 7, 8, 9, 10, 15, 20], 16);
    
        expect(search).toBeFalsy();
    })
});
