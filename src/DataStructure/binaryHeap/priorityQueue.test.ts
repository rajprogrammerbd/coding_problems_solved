import PriorityQueue, { Node } from './priorityQueue';

interface IVals {
    name: string;
}

type ITypes = [IVals, number];

describe('PriorityQueue', () => {
    it('should returned a priority queue', () => {
        const priority = new PriorityQueue<IVals>();

        priority.enqueue({ name: 'Demo person 1' }, 2);
        priority.enqueue({ name: 'Demo person 2' }, 3);
        priority.enqueue({ name: 'Demo person 3' }, 5);
        priority.enqueue({ name: 'Demo person 4' }, 10);
        priority.enqueue({ name: 'Demo person 5'}, 15);

        const arr: ITypes[] = [[{ name: 'Demo person 5'}, 15], [{ name: 'Demo person 4' }, 10], [{ name: 'Demo person 2' }, 3], [{ name: 'Demo person 1' }, 2], [{ name: 'Demo person 3' }, 5]];

        arr.forEach((arrs: ITypes, idx: number) => {
            expect(priority.values[idx]).toEqual({ val: arrs[0], priority: arrs[1] });
        });
    });

    it('should extract the top value', () => {
        const priority = new PriorityQueue<IVals>();

        priority.enqueue({ name: 'Demo person 1' }, 2);
        priority.enqueue({ name: 'Demo person 2' }, 3);
        priority.enqueue({ name: 'Demo person 3' }, 5);
        priority.enqueue({ name: 'Demo person 4' }, 10);
        priority.enqueue({ name: 'Demo person 5'}, 15);

        priority.extractMax();

        const arr: ITypes[] = [[{ name: 'Demo person 4' }, 10], [{ name: 'Demo person 3' }, 5], [{ name: 'Demo person 2' }, 3], [{ name: 'Demo person 1' }, 2]];

        arr.forEach((arrs: ITypes, idx: number) => {
            expect(priority.values[idx]).toEqual({ val: arrs[0], priority: arrs[1] });
        });
    });
});