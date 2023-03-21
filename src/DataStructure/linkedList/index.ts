
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
    private length: number;
    
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

    reverse(): SinglyLinkedList<T> {
        if (this.head === null) return this;
        let lists: Node<T> | null = null;
        let current: Node<T> | null = this.head;
        let temp: Node<T> | null;

        const lastElement = this.head;

        while (current) {
            temp = new Node<T>(current.value);

            if (!lists) {
                lists = temp;
            } else {
                temp.next = lists;

                lists = temp;
            }

            current = current.next;
        }

        lastElement.next = null;
        
        this.head = lists;
        this.tail = lastElement;

        return this;
    }

    deletion(val: T): Node<T> | null {
        let deletedElement: Node<T> | null = null;
        let current = this.head;

        if (this.head?.value === val) {
            deletedElement = this.head;

            if (this.head.next !== null) {
                this.head = this.head.next;
            } else {
                this.head = null;
                this.tail = null;
                this.length = 0;
            }

            return deletedElement;
        }

        while (current) {
            if (current.next?.value === val) {
                const getNextVal = current.next.next;

                if (getNextVal !== null && getNextVal !== undefined) {
                    const isLast = getNextVal.next !== null ? false : true;
                    deletedElement = getNextVal;

                    if (isLast) {
                        current.next = getNextVal;
                        this.tail = getNextVal;
                        this.length--;
                    } else {
                        current.next = getNextVal;
                        this.length--;
                    }

                    return deletedElement;
                } else {
                    deletedElement = current.next;
                    current.next = null;
                    this.tail = current;
                    this.length--;

                    return deletedElement;
                }
            }

            current = current.next;
        }

        return deletedElement;
    }
}

console.clear();

const list = new SinglyLinkedList<number>();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);

// list.deletion(2);
list.deletion(8);

console.log('list', list);

export default SinglyLinkedList;