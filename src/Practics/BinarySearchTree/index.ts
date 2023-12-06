console.clear();
type INode = Node | null;

class Node {
    public value: number;
    public left: INode;
    public right: INode;

    constructor (value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    protected root: INode;

    constructor () {
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new Node(value);
        
        if (this.root === null) {
            this.root = newNode;
            
            return;
        }

        let current: INode = this.root;

        while (current) {
            if (current.value === value) {
                return;
            } else if (current.value > value) {
                const left = current.left;

                if (left === null) {
                    current.left = newNode;
                    return;
                } else {
                    current = current.left;
                }
            } else {
                const right = current.right;

                if (right === null) {
                    current.right = newNode;

                    return;
                } else {
                    current = current.right;
                }
            }
        }
    }

    remove() {
        
    }

    breatheFirstSearch(root: INode = this.root): number[] {
        const result: number[] = [];
        if (root === null) return result;

        const queue: INode[] = [];

        queue.push(root);
        while (queue.length) {
            const data = queue.shift() as Node;

            result.push(data.value);
            if (data.left) queue.push(data.left);
            if (data.right) queue.push(data.right);
        }

        return result;
    }

    depthFirstSearchInOrder(mainNode: INode = this.root): number[] {
        const result: number[] = [];
        if (mainNode === null) return result;

        function traverse(node: Node) {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(mainNode);

        return result;
    }

    depthFirstSearchPreOrder(mainRoot: INode = this.root): number[] {
        const result: number[] = [];
        if (mainRoot === null) return result;

        function traverse(root: Node) {
            result.push(root.value);

            if (root.left) traverse(root.left);
            if (root.right) traverse(root.right);
        }

        traverse(mainRoot);

        return result;
    }

    depthFirstSearchPostOrder(mainRoot: INode = this.root): number[] {
        const result: number[] = [];
        if (mainRoot === null) return result;

        function traverse(root: Node) {
            if (root.left) traverse(root.left);
            if (root.right) traverse(root.right);

            result.push(root.value);
        }

        traverse(mainRoot);

        return result;
    }
}

const tree = new BinarySearchTree();

tree.insert(25);
tree.insert(15);
tree.insert(50);
tree.insert(10);
tree.insert(22);
tree.insert(35);
tree.insert(70);
tree.insert(12);
tree.insert(18);
tree.insert(44);
tree.insert(66);
tree.insert(90);
tree.insert(11);
tree.insert(64);
tree.insert(32);

console.log('tree', tree.depthFirstSearchPostOrder());