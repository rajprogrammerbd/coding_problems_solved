
// Design of HashMap
class HashMap<T extends string> {
    protected keyMap: [T, number][][];

    constructor (key = 53) {
        this.keyMap = new Array(key);
    }

    protected _hash(key: T): number {
        let count = 0;
        const PRIMITIVE_NUMBER = 31;

        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const code = char.charCodeAt(0);

            count = (count * PRIMITIVE_NUMBER + code) % this.keyMap.length;
        }

        return count;
    }

    set(key: T, value: number): [T, number] {
        const hashed = this._hash(key);

        if (this.keyMap[hashed] === undefined) {
            this.keyMap[hashed] = [];
        }

        this.keyMap[hashed].push([key, value]);

        return [key, value];
    }

    get(key: T): number | null {
        const hashed = this._hash(key);

        if (this.keyMap[hashed] !== undefined) {
            for (let i = 0; i < this.keyMap[hashed].length; i++) {
                if (this.keyMap[hashed][i][0] === key) {
                    return this.keyMap[hashed][i][1];
                }
            }
        }

        return null;
    }
}

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

    push(val: T, connectedNode?: Node<T> | undefined): Node<T> {
        const newNode = new Node<T>(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;

            return newNode;
        }

        this.tail!.next = newNode;
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

    removedItems(num: number) {
		while (this.head !== null) {
			if (this.head.value === num) {
				const next = this.head.next;

				if (next) {
					this.head = next;
				} else {
					this.head = null;
					this.tail = null;
				}
			} else break;


		}

		if (this.head === null) return this;

		let current = this.head;

		while (current) {
			if (current.next !== null && current.next.value === num) {
				const next = current.next.next;

				if (next) {
					current.next = next;
				} else {
					current.next = null;
					this.tail = current;
					break;
				}
			} else {
				current = current.next as Node<T>;
			}
		}
	}

    removeDuplication(): SinglyLinkedList<T> {
        let current = this.head;
        const hash = new HashMap<string>();

        if (this.head === null) return this;

        hash.set(this.head.value.toString(), this.head.value);

        while (current) {
            if (current.next !== null) {
                const foundNext = hash.get(current.next.value.toString());

                if (foundNext) {
                    const next = current.next.next;

                    if (next) {
                        current.next = next;
                        this.length--;
                    } else {
                        current.next = null;
                        this.tail = current;
                        this.length--;
                    }
                } else {
                    hash.set(current.next.value.toString(), current.value);
                    current = current.next;
                }
            } else {
                current = current.next;
            }
        }

        return this;
    }
}

export default SinglyLinkedList;