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

    traverse(): number[] {
        if (this.root === null) {
            return [];
        }

        const data: number[] = [];
        const queue = new Queue();

        queue.push(this.root);
        let last: any;

        while (queue.allData().length) {
            last = queue.pop();

            if (last.left !== null) {
                queue.push(last.left);
            }

            if (last.right !== null) {
                queue.push(last.right);
            }

            data.push(last.value);

        }

        return mergeSort(data);
    }
}