import Queue from "../../DataStructure/Queue";
import mergeSort from "../../Algorithms/mergeSort";

export class Node {
    public left: any;
    public right: any;

    constructor (public value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BST {
    public root: any;

    constructor () {
        this.root = null;
    }

    push(val: number) {
        const newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (current) {

            if (current.value === val) {
                return null;
            }

            if ( current.value > val ) {
                
                if (current.left === null) {
                    current.left = newNode;
                    return newNode;
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return newNode;
                }

                current = current.right;
            }
        }
    }

    remove(val: number) {
        if (this.root === null) {
            return false;
        }

        if (this.root.value === val) {
            this.root = null;
            return this;
        }

        let current = this.root;
        while (current) {
            if (current.value > val) {
                if ( current?.left?.value === val ) {
                    current.left = null;
                    return this;
                }

                current = current.left;
            } else {
                if ( current?.right?.value === val ) {
                    current.right = null;
                    return this;
                }

                current = current.right;
            }
        }
    }

    breatheFirstSearch() {
        if (this.root === null) return [];

        const result = [];
        const queue = new Queue();
        let last;

        queue.push(this.root);

        while (queue.allData().length) {
            last = queue.pop();

            result.push(last.value);

            if ( last.left !== null ) {
                queue.push(last.left);
            }

            if (last.right !== null) {
                queue.push(last.right);
            }
        }

        return result;
    }

    depthFirstSearchPreOrder(): number[] {
        if (this.root === null) return [];
        const data: number[] = [];

        function traverse(ele: { value: number; left: any; right: any }) {
            data.push(ele?.value);

            if (ele?.left !== null) traverse(ele?.left);
            if (ele?.right !== null) traverse(ele?.right); 
        }

        traverse(this.root);
        return data;
    }

    depthFirstSearchInOrder(): number[] {
        if (this.root === null) {
            return [];
        }

        const data: number[] = [];

        function traverse(node: { value: number; left: any; right: any }) {
            if (node?.left !== null) traverse(node?.left);
            data.push(node?.value);
            if (node?.right) traverse(node?.right);
        }

        traverse(this.root);

        return data;
    }

    depthFirstSearchPostOrder(): number[] {
        if (this.root === null) {
            return [];
        }

        const data: number[] = [];

        function traverse(node: { value: number; left: any; right: any }) {
            if (node?.left) traverse(node?.left);
            if (node?.right) traverse(node?.right);

            data.push(node?.value);
        }

        traverse(this.root);

        return data;
    }
}