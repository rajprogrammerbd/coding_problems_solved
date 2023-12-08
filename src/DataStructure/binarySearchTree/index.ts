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

    isEmpty() {
        return this.root === null;
    }
}