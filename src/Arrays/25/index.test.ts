import BST from "./index";

describe('Test Binary Search Tree(BST)', () => {
    const data = [10, 5, 15, 2, 5, 13, 22, 1, 14];
    let bst: BST | undefined;

    beforeEach(() => {
        bst = new BST();
    });

    afterEach(() => {
        bst = undefined;
    });

    it('should return null', () => {
        expect(bst?.root).toBeNull();
        expect(bst?.isEmpty()).toBeTruthy();
    });

    it('should be only one node exist', () => {
        const value = 10;

        bst?.insert(value);

        expect(bst?.root?.value).toBe(value);
        expect(bst?.root?.left).toBeNull();
        expect(bst?.root?.right).toBeNull();
        expect(bst?.isEmpty()).toBeFalsy();
    });

    it('should have root node and left node', () => {
        const rootValue = 10;
        const leftValue = 5;

        bst?.insert(rootValue);
        bst?.insert(leftValue);

        expect(bst?.root?.value).toBe(rootValue);
        expect(bst?.root?.left?.value).toBe(leftValue);
        expect(bst?.root?.right).toBeNull();
    });

    it('should have root node and right node', () => {
        const rootValue = 10;
        const rightValue = 15;

        bst?.insert(rootValue);
        bst?.insert(rightValue);

        expect(bst?.root?.value).toBe(rootValue);
        expect(bst?.root?.right?.value).toBe(rightValue);
        expect(bst?.root?.left).toBeNull();
    });

    it('should return correct breatheFirstSearch result', () => {
        for (let i = 0; i < data.length; i++) {
            bst?.insert(data[i]);
        }

        const expected_result = [10, 5, 15, 2, 13, 22, 1, 14];
        const result = bst?.breatheFirstSearch();

            for (let j = 0; j < expected_result.length; j++) {
                expect(result![j]).toBe(expected_result[j]);
            }
    });

    it('should find the min value and max value correctly', () => {
        for (let i = 0; i < data.length; i++) {
            bst?.insert(data[i]);
        }

        expect(bst?.max()?.value).toBe(22);
        expect(bst?.min()).toBe(1);
    });

    it('should search correctly to bst', () => {
        for (let i = 0; i < data.length; i++) {
            bst?.insert(data[i]);
        }

        expect(bst?.search(22)?.value).toBe(22);
        expect(bst?.search(0)).toBeNull();
    });

    it('should return correct depthFirstSearchPreOrder', () => {
        for (let i = 0; i < data.length; i++) {
            bst?.insert(data[i]);
        }

        const expected_result = [10,  5,  2,  1, 15, 13, 14, 22];
        const result = bst?.depthFirstSearchPreOrder();

        for (let j = 0; j < expected_result.length; j++) {
            expect(result![j]).toBe(expected_result[j]);
        }
    });

    it('should return correct depthFirstSearchInOrder', () => {
        for (let i = 0; i < data.length; i++) {
            bst?.insert(data[i]);
        }

        const expected_result = [1,  2,  5, 10, 13, 14, 15, 22];
        const result = bst?.depthFirstSearchInOrder();

        for (let j = 0; j < expected_result.length; j++) {
            expect(result![j]).toBe(expected_result[j]);
        }
    });

    it('should return correct depthFirstSearchPostOrder', () => {
        for (let i = 0; i < data.length; i++) {
            bst?.insert(data[i]);
        }

        const expected_result = [1,  2,  5, 14, 13, 22, 15, 10];
        const result = bst?.depthFirstSearchPostOrder();

        for (let j = 0; j < expected_result.length; j++) {
            expect(result![j]).toBe(expected_result[j]);
        }
    });

    it('should remove a node in bst', () => {
        for (let i = 0; i < data.length; i++) {
            bst?.insert(data[i]);
        }

        bst?.remove(10);
        bst?.remove(22);
        
        expect(bst?.search(22)).toBeNull();
        expect(bst?.search(10)).toBeNull();
    });

    it('should return 13 as the closet value of 12 in bst', () => {
        for (let i = 0; i < data.length; i++) {
            bst?.insert(data[i]);
        }
        
        const result = bst?.findCloset(12);

        expect(result).not.toBeNull();
        expect(result!.value).toBe(13);
    });
});