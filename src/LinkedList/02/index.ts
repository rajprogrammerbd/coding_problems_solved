type IValue = {
    name: string;
    id: number;
};

class Node {
    public value: IValue | null;
    public next: Node | null;

    constructor (val: IValue) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedLists {
    public head: Node | null;
    public tail: Node | null;
    public length: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: IValue): Node {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        } else {
            if (this.tail !== null) {
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
            }
        }

        return newNode;
    }

    remove(id: number) {
        if (this.head?.value?.id === id) {
            const next = this.head.next;
            
            if (next === null) {
                this.head = null;
                this.length = 0;
                this.tail = null;
            } else {
                this.head = next;
                this.length--;
            }
        }

        let current = this.head;

        while (current) {
            if (current.next?.value?.id === id) {
                const next = current.next.next;

                current.next = next;
                this.length--;

                if (next === null) {
                    this.tail = current;
                    break;
                }
            }
            current = current.next;
        }
    }
}

export default SinglyLinkedLists;
