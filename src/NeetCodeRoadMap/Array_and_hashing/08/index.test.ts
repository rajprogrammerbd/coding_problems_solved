import longestConsecutive from "./index"

describe('longestConsecutive', () => {
    it('should return 4', () => {
        const result = longestConsecutive([100,4,200,1,3,2]);

        expect(result).toBe(4);
    });
});
// [100,4,200,1,3,2]