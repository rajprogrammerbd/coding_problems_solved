
export class Node<T> {
    public val: T;
    public priority: number;

    constructor (val: T, priority: number) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue<T> {
    public values: Node<T>[];

    constructor () {
        this.values = [];
    }

    enqueue(val: T, priority: number): Node<T> {
        const newNode = new Node<T>(val, priority);

        this.values.push(newNode);
        this.bubbleUp();

        return newNode;
    }

    protected bubbleUp(): void {
        let idx: number = this.values.length - 1;
        let childElement: Node<T> = this.values[idx];

        while (idx > 0) {
            let parentIdx: number = Math.floor((idx - 1) / 2);
            let parentElement: Node<T> = this.values[parentIdx];

            if (parentElement.priority >= childElement.priority) return;

            [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];

            idx = parentIdx;
        }
    }

    extractMax(): Node<T> | undefined {
        const removed = this.values.pop();

        if (this.values.length > 1) {
            this.values[0] = removed as Node<T>;
            this.sinkDown(0);
        }

        return removed;
    }

    protected sinkDown(idx: number): void {
        let leftIdx = (idx * 2) + 1, rightIdx = (idx * 2) + 2;
        const length = this.values.length;
        let longest = idx;

        if (leftIdx < length && this.values[leftIdx].priority > this.values[longest].priority) {
            longest = leftIdx;
        }

        if (rightIdx < length && this.values[rightIdx].priority > this.values[longest].priority) {
            rightIdx = longest;
        }

        if (longest !== idx) {
            [this.values[longest], this.values[idx]] = [this.values[idx], this.values[longest]];
            this.sinkDown(longest);
        }
    }
}

export default PriorityQueue;
