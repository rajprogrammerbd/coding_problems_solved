console.clear();

let myObject: Record<string, string>;

myObject = {
    name: 'Raj'
};

// Left to right => (2n + 1)
// Right to left => (2n + 2)
// Top to bottom => (n - 1) / 2
class MaxBinaryHeap {
    public values: number[];

    constructor () {
        this.values = [];
    }

    push(val: number): void {
        this.values.push(val);

        this.bubbleUp();
    }

    private bubbleUp(): void {
        let childIdx = this.values.length - 1;
        let childElement = this.values[childIdx];

        while (childIdx > 0) {
            let parentIdx = Math.floor((childIdx - 1) / 2);
            let parentElement = this.values[parentIdx];

            if (parentElement >= childElement) return;

            [this.values[parentIdx], this.values[childIdx]] = [this.values[childIdx], this.values[parentIdx]];

            childIdx = parentIdx;
        }
    }

    size() {
        return this.values.length;
    }

    empty() {
        return this.size() === 0;
    }

    extractMax() {
        const lastIdx = this.values.pop() as number;

        if (!this.empty()) {
            this.values[0] = lastIdx;
            this.sinkDown(0);
        }
    }

    sinkDown(index: number) {
        const leftIdx = 2 * index + 1;
        const rightIdx = 2 * index + 2;
        const length = this.values.length;
        let largest = index;

        if (leftIdx < length && this.values[leftIdx] > this.values[largest]) {
            largest = leftIdx;
        }

        if (rightIdx < length && this.values[rightIdx] > this.values[largest]) {
            largest = rightIdx;
        }

        if (largest !== index) {
            [this.values[largest], this.values[index]] = [this.values[index], this.values[largest]];
            this.sinkDown(largest);
        }
    }
}

export default MaxBinaryHeap;
