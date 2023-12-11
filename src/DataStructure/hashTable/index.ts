// Implementation of school board record system to record each class student details. 
// Decleare types
type TYPE_VALUE = number;
type STUDENT_RECORD_TYPE = {
    name: string;
    roll: number;
};
type TYPE_NODE = Node | null;
type CLASS_CATEGORY = "CLASS_01" |
    "CLASS_02" |
    "CLASS_03" |
    "CLASS_04" |
    "CLASS_05" |
    "CLASS_06" |
    "CLASS_07" |
    "CLASS_08" |
    "CLASS_09" |
    "CLASS_10"

type HASH_MAP_VALUES = [CLASS_CATEGORY, LinkedList];

// Add implementation LinkedList
class Node {
    public value: STUDENT_RECORD_TYPE;
    public next: TYPE_NODE;

    constructor (value: STUDENT_RECORD_TYPE) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    public head: TYPE_NODE;
    public tail: TYPE_NODE;
    public length: TYPE_VALUE;

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value: STUDENT_RECORD_TYPE): TYPE_NODE {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;

            return newNode;
        }

        if (this.tail === null) return null;

        this.tail.next = newNode;
        this.tail = newNode;

        return newNode;
    }
}
// Add LinkedList to HashMap
export default class HashMapObject {
    public hash: [CLASS_CATEGORY, LinkedList][][];

    constructor (size = 100) {
        this.hash = new Array(size);
    }

    private _hash(key: CLASS_CATEGORY): number {
        let idx = 0;

        for (let i = 0; i < key.length; i++) {
            const value = key[i].charCodeAt(0);

            idx += value;
        }

        return idx % this.hash.length;
    }

    set(key: CLASS_CATEGORY, list: LinkedList): HASH_MAP_VALUES | false {
        const idx = this._hash(key);
        const newNode: HASH_MAP_VALUES = [key, list];

        if (this.hash[idx] === undefined) {
            this.hash[idx] = [];
        }

        for (let i = 0; i < this.hash[idx].length; i++) {
            if (this.hash[idx][i][0] === key) {
                return false;
            }
        }

        this.hash[idx].push(newNode);

        return newNode;
    }

    get(key: CLASS_CATEGORY): HASH_MAP_VALUES | false {
        const idx = this._hash(key);

        const item = this.hash[idx];

        if (!item) {
            return false;
        }

        for (let i = 0; i < item.length; i++) {
            if (item[i][0] === key) {
                return item[i];
            }
        }

        return false;
    }

    keys(): CLASS_CATEGORY[] {
        const result: CLASS_CATEGORY[] = [];

        for (let i = 0; i < this.hash.length; i++) {
            if (this.hash[i] !== undefined) {
                for (let j = 0; j < this.hash[i].length; j++) {
                    result.push(this.hash[i][j][0]);
                }
            }
        }

        return result;
    }
}
