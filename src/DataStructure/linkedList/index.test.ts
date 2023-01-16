import SinglyLinkedList from '.';

describe('SinglyLinkedList', () => {
    it('should return the linkedList', () => {
        const object = new SinglyLinkedList();

        object.push(1, null);
        object.push(2, null);
        object.push(3, 2);

        const head = object.head;
        const tail = object.tail;

        expect(head?.value).toBe(1);
        expect(head?.next?.value).toBe(2);
        expect(tail?.value).toBe(3);
        expect(tail?.next?.value).toBe(2);
    });
});
