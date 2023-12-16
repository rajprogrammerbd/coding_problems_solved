class HashMap {
    public keyMap: [string, true][][];

    constructor (size: number = 100) {
        this.keyMap = new Array(size).fill(null);
    }

    private _hash(key: string): number {
        let count = 0;

        for (let i = 0; i < key.length; i++) {
            count += key[i].charCodeAt(0);
        }

        return count % this.keyMap.length;
    }

    insert(key: number, value: true): [string, true] {
        const idx = this._hash(key.toString());

        if (this.keyMap[idx] === null) {
            this.keyMap[idx] = [];
        }

        const result: [string, true] = [key.toString(), value];

        this.keyMap[idx].push(result);

        return result;
    }

    get(key: number): false | [string, true] {
        const idx = this._hash(key.toString());

        if (this.keyMap[idx]) {
            for (let i = 0; i < this.keyMap[idx].length; i++) {
                for (let j = 0; j < this.keyMap[idx][i].length; j++) {
                    if (this.keyMap[idx][i][0] === key.toString()) {
                        return this.keyMap[idx][i];
                    }
                }
            }
        }

        return false;
    }
}

export default function containsDuplicate(arr: number[]): boolean {
    const hash = new HashMap();

    for (let i = 0; i < arr.length; i++) {
        const search = hash.get(arr[i]);

        if (search) {
            return true;
        } else {
            hash.insert(arr[i], true);
        }
    }

    return false;
}
