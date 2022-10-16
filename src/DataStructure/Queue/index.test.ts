import Queue from ".";
import { Node } from '../binarySearchTree/index';

describe('Queue', () => {
    it('should return empty queue', () => {
        const queue = new Queue();

        queue.push(new Node(1));
        queue.pop();

        expect(queue.allData()).toEqual(expect.arrayContaining([]));
    });

    it('should add first and remove last', () => {
        const queue = new Queue();
        const lastNode = new Node(2);

        queue.push(new Node(1));
        queue.push(lastNode);
        queue.pop();

        expect(queue.allData()).toEqual(expect.arrayContaining([lastNode]));
    });

    
});
