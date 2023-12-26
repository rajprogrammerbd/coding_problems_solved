class Node {
    public value: number;
    public left: Node | null;
    public right: Node | null;

    constructor (val: number) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

export default class BST {
    public root: Node | null;

    constructor () {
        this.root = null;
    }

    protected insertOne(root: Node | null, newNode: Node): Node | null {
        if (!root) return root;

        if (root.value === newNode.value) {
            return null;
        } else if (root.value > newNode.value) {
            const left = root.left;

            if (!left) {
                return root.left = newNode;
            }

            return this.insertOne(root.left, newNode);
        } else {
            const right = root.right;
            if (!right) {
                return root.right = newNode;
            }

            return this.insertOne(root.right, newNode);
        }
    }

    insert(val: number): Node | null {
        const newNode = new Node(val);

        if (this.isEmpty()) {
            this.root = newNode;
            return this.root;
        }

        return this.insertOne(this.root, newNode);
    }

    min(root = this.root): number | null {
        if (!root) return root;

        const left = root.left;
        if (left) {
            return this.min(left);
        } else {
            return root.value;
        }
    }

    max(root = this.root): Node | null {
        if (!root) return root;

        const right = root.right;
        if (right) {
            return this.max(right);
        } else {
            return root;
        }
    }

    protected removeOne(root: Node | null, val: number) {
        if (!root) return root;

        if (root.value > val) {
            root.left = this.removeOne(root.left, val);
        } else if (root.value < val) {
            root.right = this.removeOne(root.right, val);
        } else {
            const left = root.left;
            const right = root.right;

            if (!left && !right) {
                return null;
            }

            if (!left) {
                return right;
            }

            if (!right) {
                return left;
            }

            root.value = this.min(root.right) as number;
            root.right = this.removeOne(root.right, root.value);
        }

        return root;
    }

    isEmpty(root = this.root): boolean {
        return !root ? true : false;
    }

    remove(val: number) {
        return this.removeOne(this.root, val);
    }

    search(val: number, root = this.root): Node | null {
        if (!root) return root;

        if (root.value > val) {
            return this.search(val, root.left);
        } else if (root.value < val) {
            return this.search(val, root.right);
        } else {
            if (root.value === val) {
                return root;
            } else {
                return null;
            }
        }
    }

    breatheFirstSearch(): number[] {
        let result: number[] = [];
        if (!this.root) return result;

        const queue: Node[] = [];
        queue.push(this.root);

        while (queue.length) {
            const data = queue.shift();

            result.push(data!.value);
            if (data?.left) queue.push(data.left);
            if (data?.right) queue.push(data.right);
        }

        return result;
    }

    depthFirstSearchPreOrder(): number[] {
        const result: number[] = [];
        if (!this.root) return result;

        function traverse(root: Node) {
            result.push(root.value);

            if (root?.left) traverse(root.left);
            if (root?.right) traverse(root.right);
        }

        traverse(this.root);

        return result;
    }

    depthFirstSearchInOrder(): number[] {
        const result: number[] = [];
        if (!this.root) return result;

        function traverse(root: Node) {
            if (root.left) traverse(root.left);
            result.push(root.value);
            if (root.right) traverse(root.right);
        }

        traverse(this.root);

        return result;
    }

    depthFirstSearchPostOrder(): number[] {
        const result: number[] = [];
        if (!this.root) return result;

        function traverse(root: Node) {
            if (root.left) traverse(root.left);
            if (root.right) traverse(root.right);
            result.push(root.value);
        }

        traverse(this.root);

        return result;
    }

    findCloset(value: number, root = this.root): Node | null {
        if (!root) return root;

        if (root.value > value) {
            const left = root.left;
            
            if (!left) {
                return root;
            }

            return this.findCloset(value, root.left);
        } else {
            const right = root.right;

            if (!right) {
                return root;
            }

            return this.findCloset(value, root.right);
        }
    }
}
