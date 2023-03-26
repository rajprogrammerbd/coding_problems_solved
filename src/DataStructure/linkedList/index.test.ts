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

    it('should delete few items', () => {
        const list = new SinglyLinkedList<number>();

        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);
        list.push(6);
        list.push(7);
        list.push(8);
        
        list.deletion(1);
        list.deletion(5);
        list.deletion(8);

        expect(list.head?.value).toBe(2);
        expect(list.head?.next?.value).toBe(3);
        expect(list.head?.next?.next?.value).toBe(4);
        expect(list.head?.next?.next?.next?.value).toBe(6);
        expect(list.head?.next?.next?.next?.next?.value).toBe(7);
        expect(list.tail?.value).toBe(7);
    });

    it('remove all the duplication values been added to the LinkedList', () => {
        const list = new SinglyLinkedList<number>();

        // Add the data to the list
        list.push(1);
        list.push(2);
        
        // Add the 2 number second time.
        list.push(2);

        list.push(3);
        
        // Add the 3 number second time.
        list.push(3);
        list.push(3);

        // Remove the duplications
        list.removeDuplication();

        expect(list.head?.value).toBe(1);
        expect(list.head?.next?.value).toBe(2);
        expect(list.head?.next?.next?.value).toBe(3);
        expect(list.head?.next?.next?.next).toBeNull();
    });

    it('should removed all the elements which matched with passed parameter', () => {
        const list = new SinglyLinkedList<number>();

        list.push(1);
        list.push(1);
        list.push(1);
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(1);

        list.push(1);

        list.removedItems(1);

        expect(list.head?.value).toBe(2);
        expect(list.tail?.value).toBe(4);
    });
});
