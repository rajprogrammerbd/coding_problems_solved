import groupAnagrams from './index';

describe('groupAnagrams', () => {
    it('should return [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
        const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);

        const expected = [["tea", "eat", "ate"], ["tan", "nat"], ["bat"]];

        for (let i = 0; i < expected.length; i++) {
            expect(result[i]).toEqual(expect.arrayContaining(expected[i]));
        }
    });
});
