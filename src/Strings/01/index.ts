class Node {
    public value: string;
    public prev: Node | null;
    public next: Node | null;
    
    constructor (val: string) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    public head: Node | null;
    public tail: Node | null;
    public length: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: string) {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
            return this;
        }

        if (this.tail !== null) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this.tail;
        }
    }

    pop() {
        if (this.head === null) {
            return;
        }

        if (this.tail !== null) {
            if (this.tail.prev !== null) {
                const newNode = this.tail.prev;
                newNode.next = null;
                this.tail = newNode;
                this.length--;

                return this.tail;
            } else {
                this.head = null;
                this.tail = null;
                this.length = 0;
                
                return this;
            }
        }
    }

    getAll() {
        if (this.length === 0) {
            return [];
        }

        let current = this.head;
        const arr = [];

        while (current) {
            arr.push(current.value);
            current = current.next;
        }

        return arr;
    }
}


// Brute Force Solution.
/*
function typedOutString(S: string, T: string): boolean { // O(n + n)
    const splitedS = S.split('');
    const splitedT = T.split('');

    const listS = new LinkedList();
    const listT = new LinkedList();

    for (let i = 0; i < splitedS.length; i++) {
        if (splitedS[i] === '#') {
            listS.pop();
        } else {
            listS.push(splitedS[i]);
        }
    }

    for (let j = 0; j < splitedT.length; j++) {
        if (splitedT[j] === '#') {
            listT.pop();
        } else {
            listT.push(splitedT[j]);
        }
    }

    const mergedS = listS.getAll().join('');
    const mergedT = listT.getAll().join('');

    if (mergedS === mergedT) {
        return true;
    }


    return false;
}
*/

function typedOutString(S: string, T: string): boolean {
    let p1 = S.length - 1, p2 = T.length - 1;
    
    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p1--;
                    backCount--;
                    
                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            
            if(T[p2] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    
                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if(S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    
    return true;
}

export default typedOutString;