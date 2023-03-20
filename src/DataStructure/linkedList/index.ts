
// The class structure of a Node
export class Node<T> {
    public value: T;
    public next: Node<T> | null;

    constructor (val: T) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList<T extends number> {
    public head: Node<T> | null;
    public tail: Node<T> | null;
    public length: number;
    
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T, connectedNode?: Node<T> | undefined): Node<T> | null {
        const newNode = new Node<T>(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;

            return newNode;
        }

        if (this.tail == null) return null;

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        if (connectedNode) {
            this.tail.next = connectedNode;
        }

        return newNode;
    }

    detectCycle(): false | Node<T> {
        if (this.head === null) return false;
        
        type PointersType = Node<T> | null | undefined;

        let slowPointer: PointersType = this.head, fastPointer: PointersType = this.head;

        while (slowPointer !== null && fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;

            if (fastPointer?.value === slowPointer?.value) {
                break;
            }
        }

        if (slowPointer?.value !== fastPointer?.value) {
            return false;
        }

        slowPointer = this.head;

        while (slowPointer?.value !== fastPointer?.value) {
            slowPointer = slowPointer?.next;
            fastPointer = fastPointer?.next;
        }

        return slowPointer as Node<T>;
    }

    findLengthOfCycle(): number {
        let count = 0;

        if (this.head === null) return count;

        const cycle = this.detectCycle();

        if (!cycle) {
            return count;
        }

        let current: Node<T> | null | undefined = cycle;

        do {
            count++;
            current = current?.next;
        } while (current?.value !== cycle.value);

        return count;
    }
}

export default SinglyLinkedList;