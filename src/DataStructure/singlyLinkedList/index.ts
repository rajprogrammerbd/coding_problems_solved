// Add an example of SinglyLinkedList

class Node {
    public value: number;
    public next: Node | null;

    constructor (value: number) {
        this.value = value;
        this.next = null;        
    }
}

type PROPERTIES_EXAMPLE = Node | null;

export default class SinglyLinkedListed {
    private head: PROPERTIES_EXAMPLE;
    private tail: PROPERTIES_EXAMPLE;
    private length: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: number, circle: Node | false = false): Node {
        const newNode = new Node(val);

        if (circle) {
            newNode.next = circle;
        }

        if (this.length > 0) {

            if (this.tail !== null) {
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
    
                return newNode;
            }
        }

        this.head = newNode;
        this.tail = newNode;
        this.length = 1;

        return newNode;
    }

    pop(): void {
        if (this.length <= 0) return;

        if (this.len() === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;

            return;
        }

        let current = this.head;
        while (current) {
            if (!current.next?.next) {
                current.next = null;
                this.tail = current;
                this.length--;
                break;
            }

            current = current.next;
        }
    }

    getHead(): PROPERTIES_EXAMPLE {
        return this.head;
    }

    getTail(): PROPERTIES_EXAMPLE {
        return this.tail;
    }

    len(): number {
        return this.length;
    }

    removeDuplicates(): void {
        if (this.length <= 0) return;

        interface IHash {
            [key: string]: true;
        }

        const hash: IHash = {};

        if (this.head === null) return;

        hash[this.head.value] = true;

        let current: PROPERTIES_EXAMPLE = this.head;
        while (current) {
            const preNext = current.next;

            if (preNext !== null) {
                if (hash[preNext.value] !== undefined) {
                    const postNext = preNext.next;

                    if (postNext !== null) {
                        current.next = postNext;
                        this.length--;
                    } else {
                        current.next = null;
                        this.tail = current;
                        this.length--;

                        return;
                    }
                } else {
                    hash[preNext.value] = true;

                    current = current.next;
                }
            } else {
                current = current.next;
            }
        }
    }

    hasCircle(): boolean {
        if (this.length <= 0) return false;

        let started: boolean = false;
        let firstPointer: PROPERTIES_EXAMPLE = this.head;
        let lastPointer: PROPERTIES_EXAMPLE = this.head;

        while (true) {
            if (firstPointer === null || lastPointer === null) {
                return false;
            }

            if (firstPointer?.value === lastPointer?.value) {
                if (!started) {
                    started = true;

                    if (lastPointer?.next === null || lastPointer?.next?.next === undefined) return false;

                    firstPointer = firstPointer?.next;
                    lastPointer = lastPointer?.next?.next;
                } else {
                    return true;
                }
            } else {
                if (lastPointer?.next === null || lastPointer?.next?.next === undefined) return false;

                firstPointer = firstPointer?.next;
                lastPointer = lastPointer?.next?.next;
            }
        }
    }
}