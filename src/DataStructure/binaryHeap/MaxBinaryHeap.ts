console.clear();

class MaxBinaryHeap {
    protected values: number[];

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

const heap = new MaxBinaryHeap();
heap.push(10);
heap.push(12);
heap.push(11);
heap.push(13);
heap.push(14);
heap.push(15);
heap.push(16);
heap.push(17);
heap.push(18);
heap.push(19);
heap.push(20);

heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();

console.log('heap', heap);
