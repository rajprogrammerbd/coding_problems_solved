console.clear();

type BST_NODE_TYPE = BSTNode | null;
class BSTNode {
    public value: number;
    public left: BST_NODE_TYPE;
    public right: BST_NODE_TYPE;

    constructor (value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

type BSTClassType = null | BSTNode;

class BSTree {
    public root: BSTClassType;

    constructor () {
        this.root = null;
    }

    isEmpty(): boolean {
        return this.root === null;
    }

    insert(value: number): BSTNode | false {
        const newNode = new BSTNode(value);

        if (this.isEmpty()) {
            this.root = newNode;
            return newNode;
        }

        return this.insertNode(this.root, newNode);
    }

    private insertNode(root: BSTClassType, newNode: BSTNode): BSTNode | false {
        if (root?.value === newNode.value) {
            return false;
        }

        if (root === null) return false;


        if (root.value > newNode.value) {
            const left = root.left;

            if (left === null) {
                root.left = newNode;
                return newNode;
            }
            
            return this.insertNode(root.left, newNode);
        } else {
            const right = root.right;

            if (right === null) {
                root.right = newNode;
                return newNode;
            }

            return this.insertNode(root.right, newNode);
        }
    }

    search(value: number, root = this.root): boolean {
        if (root === null) return false;

        if (root.value === value) {
            return true;
        } else if (root.value > value) {
            return this.search(value, root.left);
        } else {
            return this.search(value, root.right);
        }
    }

    min(root: BSTClassType = this.root): number | false {
        if (root === null) return false;

        if (root.left === null) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root = this.root): number | false {
        if (root === null) return false;

        if (root.right) {
            return this.max(root.right);
        } else {
            return root.value;
        }
    }

    delete(value: number): void {
        this.root = this.deleteOne(this.root, value);
    }

    deleteOne(root: BSTClassType, value: number): BSTClassType {
        if (root === null) {
            return root;
        }
        
        if (root.value > value) {
            root.left = this.deleteOne(root.left, value);
        } else if (root.value < value) {
            root.right = this.deleteOne(root.right, value);
        } else {
            const left = root.left;
            const right = root.right;

            if (left === null && right === null) {
                return null;
            }

            if (left === null) {
                return root.right;
            }

            if (right === null) {
                return root.left;
            }

            root.value = this.min(root.right) as number;
            root.right = this.deleteOne(root.right, root.value);
        }

        return root;
    }

    breatheFirstSearch(returnType: "array" | "function" = "array", cb: (value: number) => void = (value) => {}, root = this.root): number[] | void {
        const result: number[] = [];
        if (root === null) return result;

        const queue: BSTNode[] = [];

        queue.push(root);

        while (queue.length) {
            const value: BSTNode = queue.shift() as BSTNode;
            if (returnType === "function") {
                cb(value.value);
            } else {
                result.push(value.value);
            }

            if (value.left) queue.push(value.left);
            if (value.right) queue.push(value.right);
        }

        if (returnType === "function") {
            return;
        }

        return result;
    }
}

const list = new BSTree();

list.insert(25);
list.insert(15);
list.insert(10);
list.insert(22);
list.insert(12);
list.insert(18);
list.insert(11);

list.insert(50);
list.insert(35);
list.insert(70);
list.insert(32);
list.insert(44);
list.insert(66);
list.insert(90);
list.insert(64);

list.delete(64);

list.breatheFirstSearch('function', (value: number) => {
    console.log('value', value);
});