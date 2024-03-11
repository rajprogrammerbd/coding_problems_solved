class Nodes<T> {
    public value: T;
    public next: Nodes<T> | null;

    constructor (value: T) {
        this.value = value;
        this.next = null;
    }
}

class SinglyedLinkedList<T> {
    
    public head: Nodes<T> | null;
    public tail: Nodes<T> | null;
    public len: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    insert(value: T, node: false | Nodes<T> = false): Nodes<T> {
        const newNode = new Nodes(value);

        if (node) {
            newNode.next = node;
        }

        if (!this.len) {
            this.head = newNode;
            this.tail = newNode;
            this.len = 1;

            return this.head;
        }
                
        this.tail!.next = newNode;
        this.tail = newNode;
        this.len++;

        return this.tail;
    }

    get items(): T[] {
        const result: T[] = [];

        let current = this.head;
        while (current) {
            result.push(current.value);

            current = current.next;
        }

        return result;
    }

    remove(val: T): void {
        if (!this.head) return;

        while (this.head && this.head.value === val) {
            const next: Nodes<T> | null = this.head.next;

            if (next) {
                this.head = next;
            } else {
                this.head = null;
                this.tail = null;
                this.len = 0;

                break;
            }
        }

        let current = this.head;
        while (current) {
            const next = current.next;

            if (next && next.value === val) {
                const postNext = next.next;

                if (postNext) {
                    current.next = postNext;
                    this.len--;
                } else {
                    current.next = null;
                    this.tail = current;
                    this.len--;

                    break;
                }
            } else {
                current = current.next;
            }
        }
    }

    get hasCircle(): boolean {
        if (!this.head) {
            return false;
        }

        let first_pointer = this.head, last_pointer = this.head;
        while (true) {
            if (!first_pointer || !last_pointer) {
                break;
            }

            if (!first_pointer.next || !last_pointer.next || !last_pointer.next.next) {
                break;
            }

            first_pointer = first_pointer.next;
            last_pointer = last_pointer?.next?.next;

            if (first_pointer.value === last_pointer.value) {
                return true;
            }

        }

        return false;
    }
}

export default SinglyedLinkedList;
