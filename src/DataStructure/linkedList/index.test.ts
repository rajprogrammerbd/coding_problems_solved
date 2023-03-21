import SinglyLinkedList from './index';

describe('SinglyLinkedList', () => {
    it('should return the linkedList', () => {
        const object = new SinglyLinkedList<number>();

        object.push(1);
        const obj = object.push(2);
        
        if (obj !== null) {
            object.push(3, obj);
        }

        const head = object.head;
        const tail = object.tail;

        expect(head?.value).toBe(1);
        expect(head?.next?.value).toBe(2);
        expect(tail?.value).toBe(3);
        expect(tail?.next?.value).toBe(2);
    });

    it('should have a circle in the LinkedList', () => {
        const object = new SinglyLinkedList<number>();

        const obj = object.push(1);
        object.push(3);
        object.push(4);

        if (obj !== null) {
            object.push(5, obj);
        }

        expect(object.head?.value).toBe(1);
        expect(object.head?.next?.value).toBe(3);
        expect(object.head?.next?.next?.value).toBe(4);
        expect(object.head?.next?.next?.next?.value).toBe(5);
        expect(object.head?.next?.next?.next?.next?.value).toBe(1);
        
        expect(object.findLengthOfCycle()).toBe(4);
    });

    it('should not have a circle', () => {
        const object = new SinglyLinkedList<number>();

        object.push(1);
        object.push(3);
        object.push(4);
        object.push(5);

        expect(object.detectCycle()).toBeFalsy();
        expect(object.findLengthOfCycle()).toBe(0);
    });

    it('should be reversed the list', () => {
        const object = new SinglyLinkedList<number>();

        object.push(1);
        object.push(2);
        object.push(3);
        object.push(4);
        object.push(5);

        object.reverse();

        expect(object.head?.value).toBe(5);
        expect(object.head?.next?.value).toBe(4);
        expect(object.head?.next?.next?.value).toBe(3);
        expect(object.head?.next?.next?.next?.value).toBe(2);
        expect(object.head?.next?.next?.next?.next?.value).toBe(1);
    });
});
