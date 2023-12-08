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

console.log(list);