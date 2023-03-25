import MaxBinaryHeap from './MaxBinaryHeap';

describe('MaxBinaryHeap', () => {
    it('should return a heap', () => {
        const heap = new MaxBinaryHeap();

        heap.push(10);
        heap.push(15);

        expect(heap.values[0]).toBe(15);
        expect(heap.values[1]).toBe(10);
    });

    it('should run extractMax and return the correct', () => {
        const heap = new MaxBinaryHeap();

        heap.push(1);
        heap.push(5);
        heap.push(10);
        heap.push(15);

        expect(heap.values[0]).toBe(15);
        expect(heap.values[1]).toBe(10);
        expect(heap.values[2]).toBe(5);
        expect(heap.values[3]).toBe(1);

        heap.extractMax();

        expect(heap.values[0]).toBe(10);
        expect(heap.values[1]).toBe(1);
        expect(heap.values[2]).toBe(5);
        expect(heap.values[3]).toBeUndefined();
    });
});
