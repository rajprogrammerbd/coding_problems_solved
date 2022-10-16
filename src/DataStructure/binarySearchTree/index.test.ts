import BST from ".";

describe('Binary Search Tree', () => {
    it('this.root should be null', () => {
        const bst = new BST();

        expect(bst).toEqual({ root: null });
    });

    it('should have only the root Node', () => {
        const bst = new BST();

        bst.push(1);

        expect(bst).toEqual({ root: { value: 1, left: null, right: null } });
    });

    it('add node to the left', () => {
        const bst = new BST();

        bst.push(5);
        bst.push(4);
        bst.push(3);

        expect(bst).toEqual({ root: { value: 5, left: { value: 4, left: { value: 3, left: null, right: null }, right: null }, right: null } });
    });

    it('add node to the right', () => {
        const bst = new BST();

        bst.push(5);
        bst.push(6);
        bst.push(7);

        expect(bst).toEqual({ root: { value: 5, left: null, right: { value: 6, left: null, right: { value: 7, left: null, right: null } } } });
    });

    it('should return null', () => {
        const bst = new BST();

        bst.push(5);
        
        expect(bst.push(5)).toBeNull();
    });

    it('remove should be falsy as return', () => {
        const bst = new BST();

        expect(bst.remove(1)).toBeFalsy();
    });

    it('remove should set the root as null', () => {
        const bst = new BST();

        bst.push(1);

        expect(bst.remove(1)).toEqual({ root: null });
    });

    it('remove node to the left', () => {
        const bst = new BST();

        bst.push(5);
        bst.push(4);
        bst.push(3);

        expect(bst.remove(3)).toEqual({ root: { value: 5, left: { value: 4, left: null, right: null }, right: null } });
    });

    it('remove node to the right', () => {
        const bst = new BST();

        bst.push(5);
        bst.push(6);
        bst.push(7);

        expect(bst.remove(7)).toEqual({ root: { value: 5, left: null, right: { value: 6, left: null, right: null } } });
    });

    it('should return the empty array', () => {
        const bst = new BST();

        expect(bst.traverse()).toEqual([]);
    });

    it('should return the [123456789]', () => {
        const bst = new BST();

        bst.push(5);
        bst.push(4);
        bst.push(3);
        bst.push(2);
        bst.push(1);

        bst.push(6);
        bst.push(7);
        bst.push(8);
        bst.push(9);

        expect(bst.traverse()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });
});
