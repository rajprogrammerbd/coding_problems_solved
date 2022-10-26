
class MaxBinaryHeap {
    public values: number[];

    constructor () {
        this.values = [];
    }

    insert(val: number) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let childIndex = this.values.length - 1;
        let childElement = this.values[childIndex];

        while (childIndex > 0) {
            let parentIndex = Math.floor((childIndex - 1) / 2);
            let parentElement = this.values[parentIndex];

            if (parentElement >= childElement) break;

            this.values[parentIndex] = childElement;
            this.values[childIndex] = parentElement;

            childIndex = parentIndex;
        }
    }
}

export default MaxBinaryHeap;