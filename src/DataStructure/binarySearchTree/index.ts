console.clear();

type BST_NODE_VALUE_TYPE = number;
type BST_TRAVERSE_RETURNED_TYPE = "array" | "function";
type BST_TRAVERSE_RETURNED_VALUE_TYPE = BST_NODE_VALUE_TYPE[] | void;
type BST_NODE_TYPE = BSTNode | null;
type BSTClassType = null | BSTNode;
class BSTNode {
    public value: BST_NODE_VALUE_TYPE;
    public left: BST_NODE_TYPE;
    public right: BST_NODE_TYPE;

    constructor (value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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

    breatheFirstSearch(returnType: BST_TRAVERSE_RETURNED_TYPE = "array", cb: (value: number) => void = (value) => {}, root = this.root): BST_TRAVERSE_RETURNED_VALUE_TYPE {
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

    PreOrder(returnType: BST_TRAVERSE_RETURNED_TYPE = "array", cb: (value: number) => void = (value) => {}, root = this.root): BST_TRAVERSE_RETURNED_VALUE_TYPE {
        const result: number[] = [];
        if (root === null) return result;

        function traverse(rootNode: BSTNode) {
            if (returnType === "function") {
                cb(rootNode.value);
            } else {
                result.push(rootNode.value);
            }

            if (rootNode.left) traverse(rootNode.left);
            if (rootNode.right) traverse(rootNode.right);
        }

        traverse(root);

        if (returnType === "function") {
            return;
        }

        return result;
    }

    inOrder(returnType: BST_TRAVERSE_RETURNED_TYPE = "array", cb: (value: number) => void = (value) => {}, root = this.root): BST_TRAVERSE_RETURNED_VALUE_TYPE {
        const result: number[] = [];
        if (root === null) return result;

        function traverse(rootNode: BSTNode) {
            if (rootNode.left) traverse(rootNode.left);

            if (returnType === "function") {
                cb(rootNode.value);
            } else {
                result.push(rootNode.value);
            }

            if (rootNode.right) traverse(rootNode.right);
        }

        traverse(root);

        if (returnType === "function") {
            return;
        }

        return result;
    }

    postOrder(returnType: BST_TRAVERSE_RETURNED_TYPE = "array", cb: (value: number) => void = (value) => {}, root = this.root): BST_TRAVERSE_RETURNED_VALUE_TYPE {
        const result: number[] = [];
        if (root === null) return result;

        function traverse(rootNode: BSTNode) {
            if (rootNode.left) traverse(rootNode.left);
            if (rootNode.right) traverse(rootNode.right);

            if (returnType === "function") {
                cb(rootNode.value);
            } else {
                result.push(rootNode.value);
            }
        }

        traverse(root);

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
    console.log('breatheFirstSearch ', value);
});

list.PreOrder('function', (value: number) => {
    console.log('DepthFirstSearch PreOrder ', value);
});

list.inOrder("function", (value: number) => {
    console.log('DepthFirstSearch InOrder ', value);
});

list.postOrder("function", (value: number) => {
    console.log('DepthFirstSearch PostOrder ', value);
});
