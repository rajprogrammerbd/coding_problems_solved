console.clear();

const array = [10, 5, 6, 2, 0, 3, 4, 1, 9, 7, 8, 11, 16, 15, 14, 19, 17, 20, 100];

type Structure = {
    name: string;
    id: number;
};

function recursive(arr: number[]): number[] | undefined {
    console.log('array', arr);
    if (arr.length === 1) return arr;

    arr.pop();
    recursive(arr);
}

function bubbleSort(arr: number[]): number[] {

    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] !== undefined && arr[j + 1] !== undefined) {
                if ( arr[j] > arr[j + 1] ) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }
    
    return arr;
}

function selectionSort(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        let smallest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallest] > arr[j]) {
                smallest = j;
            }
        }

        if (arr[smallest] !== undefined) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        }
    }

    return arr;
}

function insertionSort(arr: number[]): number[] {

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            } else break;
        }
    }
    
    return arr;
}

function merge(arr1: number[], arr2: number[]): number[] {
    const array: number[] = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            array.push(arr1[i]);
            i++;
        } else {
            array.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        array.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        array.push(arr2[j]);
        j++;
    }

    return array;
}

function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const first = mergeSort(arr.slice(0, mid));
    const last = mergeSort(arr.slice(mid));

    return merge(first, last);
}

const value = mergeSort(array);

function binarySearch(arr: number[], num: number): boolean {
    let start = 0;
    let end = arr.length;
    let middle = Math.floor((start + end) / 2);
    
    while (start <= end) {
        if (arr[middle] === num) {
            return true;
        }

        if (arr[middle] > num) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    return false;
}

const search = binarySearch(value, 20);

// Implementation of Single LinkedList.
class SingleNode<T> {
    public value: T;
    public next: SingleNode<T> | null;

    constructor (val: T) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList<T extends Structure> {
    public head: SingleNode<T> | null;
    public tail: SingleNode<T> | null;
    public length: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T): SingleNode<T> {
        const newNode = new SingleNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return newNode;
        }

        if (this.tail !== null) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }

        return newNode;
    }
    
    find(val: T): boolean | SingleNode<T> {
        let found = false;
        let current = this.head;

        while (current) {
            if (current.value.id === val.id) {
                return current;
            }

            current = current.next;
        }

        return found;
    }

    remove(val: T): void {
        let current = this.head;

        if (this.head?.value.id === val.id) {
            if (this.head.next !== null) {
                this.head = this.head.next;
                this.length--;
            } else {
                this.head = null;
                this.length = 0;
                this.tail = null;
            }

            return;
        }

        while (current) {
            if (current.next?.value.id === val.id) {
                const isNextAvailable = current.next.next;
                if (isNextAvailable === null) {
                    this.tail = current;
                }

                this.length--;
                current.next = isNextAvailable;

            }

            current = current.next;
        }
    }
}

const singleList = new SinglyLinkedList<Structure>();

singleList.push({ id: 1, name: 'Raj' });
singleList.push({ id: 2, name: 'Dola' });
singleList.push({ id: 3, name: 'Mamma' });
singleList.push({ id: 4, name: 'Papa' });

const founded = singleList.find({ id: 13, name: 'Raj' });
singleList.remove({ id: 2, name: 'Raj' });

class DoublyNode {
    public value: Structure;
    public next: DoublyNode | null;
    public prev: DoublyNode | null;

    constructor (value: Structure) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    public head: DoublyNode | null;
    public length: number;
    public tail: DoublyNode | null;

    constructor () {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    push(val: Structure) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
             this.head = newNode;
             this.tail = newNode;
             this.length = 1;
             return;
        }

        if (this.tail !== null) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

            this.length++;
        }
    }

    remove(id: number): void {
        let current = this.head;

        if (this.head?.value.id === id) {
            if (this.head.next === null) {
                this.head = null;
                this.tail = null;
                this.length = 0;
                return;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
                this.length--;
            }
        }

        while (current) {

            if (current.value.id === id) {
                if (current.next !== null) {
                    if (current.prev !== null) {
                        current.next.prev = current.prev;
                        current.prev.next = current.next;
                    }
                } else {
                    this.tail = current.prev;
                    if (this.tail !== null) {
                        this.tail.next = null;
                    }
                }
                this.length--;
            }

            current = current.next;
        }
    }
}

const doublyList = new DoublyLinkedList();

doublyList.push({ id: 1, name: 'Raj' });
doublyList.push({ id: 2, name: 'Dola' });
doublyList.push({ id: 3, name: 'Mom' });
doublyList.push({ id: 4, name: 'Papa' });
doublyList.remove(2);

type Store = [string, string | number];
type Str = Store[];
class HashMap {
    protected keys: Str[];

    constructor (key: number = 53) {
        this.keys = new Array(key);
    }

    protected _hash(key: string) {
        const PRIMITIVE_NUMBER = 31;
        let value = 0;

        for (let i = 0; i < Math.min(100, key.length); i++) {
            const char = key[i];
            const code = char.charCodeAt(0) - 96;

            value = (value + PRIMITIVE_NUMBER * code) % this.keys.length;
        }
        
        return value;
    }

    push(key: string, value: string): void {
        const hashed = this._hash(key);

        if (this.keys[hashed] === undefined) {
            this.keys[hashed] = [];
        }

        this.keys[hashed].push([key, value]);
    }

    get(key: string): string | number | boolean {
        
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] !== undefined) {
                for (let j = 0; j < this.keys[i].length; j++) {
                    if (this.keys[i][j][0] === key) {
                        return this.keys[i][j][1];
                    }
                }
            }
        }

        return false;
    }

    hash_keys(): string[] {
        const array = [];

        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] !== undefined) {
                for (let j = 0; j < this.keys[i].length; j++) {
                    array.push(this.keys[i][j][0]);
                }
            }
        }

        return array;
    }

    hash_values(): (string | number)[] {
        const array = [];

        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] !== undefined) {
                for (let j = 0; j < this.keys[i].length; j++) {
                    array.push(this.keys[i][j][1]);
                }
            }
        }

        return array;
    }
}

const hashMap = new HashMap(100);

hashMap.push('my name', 'Raj Dutta');
hashMap.push('my sister name', 'Dola Dutta');
hashMap.push('my mother name', 'Arati Rani Dutta');
hashMap.push('my father name', 'Taposh kumar Dutta');

class Stack_Node {
    public value: number;
    public next: Stack_Node | null;

    constructor (value: number) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    private first: Stack_Node | null;
    private last: Stack_Node | null;
    private size: number;

    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val: number): void {
        const newNode = new Stack_Node(val);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
            this.size = 1;
            return;
        }

        if (this.last !== null) {
            this.last.next = newNode;
            this.last = newNode;
            this.size++;
        }
    }

    pop(): void {
        let current = this.first;
        const last = this.last?.value;

        if (this.first?.value === last) {
            this.first = null;
            this.last = null;
            this.size = 0;

            return;
        }

        while (current) {
            if (current.next?.value === last) {
                current.next = null;
                this.size--;
                this.last = current;
                break;
            }

            current = current.next;
        }
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.pop();
stack.pop();
stack.pop();
stack.pop();

class Queue_Node {
    public value: number;
    public next: Queue_Node | null;

    constructor (val: number) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    public first: Queue_Node | null;
    public last: Queue_Node | null;
    public size: number;

    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val: number): Queue_Node {
        const newNode = new Queue_Node(val);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
            this.size = 1;
        } else {
            if (this.last !== null) {
                this.last.next = newNode;
                this.last = newNode;
                this.size++;
            }
        }

        return newNode;
    }

    pop(): void {
        if (this.size === 1) {
            this.first = null;
            this.last = null;
            this.size = 0;
        } else {
            if (this.first !== null) {
                const second = this.first.next;
                this.first = second;
                this.size--;
            }
        }
    }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

queue.pop();
queue.pop();
queue.pop();
queue.pop();

class BST_Node {
    public value: number;
    public left: BST_Node | null;
    public right: BST_Node | null;

    constructor (val: number) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    public root: BST_Node | null;

    constructor () {
        this.root = null;
    }

    push(val: number): void {
        const newNode = new BST_Node(val);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (current.value === val) {
                return;
            }
            
            if (current.value > val) {
                if (current.left !== null) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    return;
                }
            } else {
                if (current.right !== null) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    return;
                }
            }
        }
    }

    find(val: number): boolean {
        
        let current = this.root;
        while (true) {
            if (current?.value === val) {
                return true;
            }

            if (current?.value !== undefined) {
                if (current.value > val) {
                    if (current.left === null) {
                        return false;
                    }

                    current = current.left;
                } else {
                    if (current.right === null) {
                        return false;
                    }

                    current = current.right;
                }
            }
        }
    }
}

const bst = new BST();

bst.push(58);
bst.push(14);
bst.push(75);
bst.push(7);

console.log('binarySearchTree', bst.find(14));