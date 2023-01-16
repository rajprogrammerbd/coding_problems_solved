
// The class structure of a Node
export class Node {
    public value: number;
    public next: Node | null; 

    constructor(val: number) {
        this.value = val;

        this.next = null;
    }
}

// Here are the implementation of SinglyLinkedList
export default class SinglyLinkedList {
    public head: Node | null;
    public tail: Node | null;
    public length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: number, arg: number | null) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;

            return this.head;
        } else if (this.tail !== null) {
            if (arg === null) {
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
    
                return this.tail;
            }

            let current = this.head;
            while (current) {
                if (current.value === arg) {
                    break;
                }

                current = current.next;
            }

            if (current?.value === arg) {
                newNode.next = current;
            }

            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;

            return this.tail;
        }
    }
}