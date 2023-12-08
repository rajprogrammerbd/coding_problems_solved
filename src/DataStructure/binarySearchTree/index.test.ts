import BSTree from './';

const data = [25, 15, 10, 22, 12, 18, 11, 50, 35, 70, 32, 44, 66, 90, 64];
type TRAVERSAL_TYPE = "BSF" | "INORDER" | "PREORDER" | "POSTORDER";

function traversal(type: TRAVERSAL_TYPE, result: number[]) {
    type RETURNED_TYPE = "breatheFirstSearch" | "inOrder" | "postOrder" | "PreOrder";
    function named(type: TRAVERSAL_TYPE): RETURNED_TYPE {
        switch (type) {
            case "BSF":
                return "breatheFirstSearch";
            case "INORDER":
                return "inOrder";
            case "POSTORDER":
                return "postOrder";
            default:
                return "PreOrder";
        }
    }

    let fnCalledName: RETURNED_TYPE;
    fnCalledName = named(type);

    it(fnCalledName, () => {
        const list = new BSTree();

        for (let i = 0; i < data.length; i++) {
            list.insert(data[i]);
        }

        const searchValue = list[fnCalledName]("array") as number[];

        expect(searchValue.length).toBe(result.length);
        for (let i = 0; i < result.length; i++) {
            expect(searchValue[i]).toBe(result[i]);
        }

        list[fnCalledName]("array", (value: number, i: number) => {
            expect(value).toBe(result[i]);
        });
    });
}

describe('Binary Search Tree', () => {
    describe('Insertion and searching', () => {
        it('initial of binary search', () => {
            const list = new BSTree();

            expect(list.isEmpty()).toBeTruthy();
            expect(list.root).toBeNull();
        });

        it('add a root node', () => {
            const list = new BSTree();

            // add a number
            const number = 1;
            list.insert(number);

            expect(list.root?.value).toBe(1);
            expect(list.root?.left).toBeNull();
            expect(list.root?.right).toBeNull();
        });

        it('add two nodes', () => {
            const list = new BSTree();

            const nums = [10, 15];
            for (let i = 0; i < nums.length; i++) {
                list.insert(nums[i]);
            }

            expect(list.root?.value).toBe(nums[0]);
            expect(list.root?.left).toBeNull();
            expect(list.root?.right).not.toBeNull();
            expect(list.root?.right?.value).toBe(nums[1]);
        });

        it('multple values addition and use methods', () => {
            const list = new BSTree();

            for (let i = 0; i < data.length; i++) {
                list.insert(data[i]);
            }

            expect(list.root?.value).toBe(25);
            expect(list.min()).toBe(10);
            expect(list.max()).toBe(90);
        });

        it('search the values', () => {
            const list = new BSTree();

            for (let i = 0; i < data.length; i++) {
                list.insert(data[i]);
            }

            expect(list.search(100)).not.toBeTruthy();
            expect(list.search(18)).toBeTruthy();
        });
    });

    describe('deletion and traversing', () => {
        describe('deletion', () => {
            it('should delete first root', () => {
                const list = new BSTree();

                const num = 1;
                list.insert(num);
                list.delete(num);

                expect(list.root).toBeNull();
            });

            it('should delete multiple from right and left side', () => {
                const list = new BSTree();

                for (let i = 0; i < data.length; i++) {
                    list.insert(data[i]);
                }

                const deletedItems = [25, 15, 10, 22, 12]

                list.delete(...deletedItems);

                for (let i = 0; i < deletedItems.length; i++) {
                    expect(list.search(deletedItems[i])).toBeFalsy();
                }
            });
        });

        describe('traversal', () => {
            const values: { name: TRAVERSAL_TYPE, items: number[] }[] = [
                { name: "BSF", items: [25, 15, 50, 10, 22, 35, 70, 12, 18, 32, 44, 66, 90, 11, 64] },
                { name: "PREORDER", items: [25, 15, 10, 12, 11, 22, 18, 50, 35, 32, 44, 70, 66, 64, 90] },
                { name: "INORDER", items: [10, 11, 12, 15, 18, 22, 25, 32, 35, 44, 50, 64, 66, 70, 90] },
                { name: "POSTORDER", items: [11, 12, 10, 18, 22, 15, 32, 44, 35, 64, 66, 90, 70, 50, 25 ] }
            ];

            for (let i = 0; i < values.length; i++) {
                traversal(values[i].name, values[i].items);
            }
        });
    });
});
