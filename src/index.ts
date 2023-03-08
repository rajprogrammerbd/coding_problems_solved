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

console.log('singleLinkedList', singleList.head);