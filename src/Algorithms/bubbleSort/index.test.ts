import bubbleSort from ".";

describe("bubbleSort", () => {
    it('should sort the array', () => {
        const sort = bubbleSort([5, 4, 3, 2, 1, 0]);
        
        expect(sort[0]).toBe(0);
        expect(sort[1]).toBe(1);
        expect(sort[2]).toBe(2);
        expect(sort[3]).toBe(3);
        expect(sort[4]).toBe(4);
        expect(sort[5]).toBe(5);
    });
});
