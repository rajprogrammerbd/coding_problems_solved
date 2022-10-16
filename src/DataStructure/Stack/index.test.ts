import Stack from ".";

describe('stack', () => {
    it('should return empty stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.pop();

        expect(stack.allData).toEqual([]);
    });

    it('should have 1 inserted into the stack', () => {
        const stack = new Stack();
        stack.push(1);

        expect(stack.allData).toEqual(expect.arrayContaining([1]));
    });
});