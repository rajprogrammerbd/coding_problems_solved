import SinglyLinkedLists from './';

describe('SinglyLinkedLists', () => {
    it('init the linkedlist', () => {
        const list = new SinglyLinkedLists();

        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    it('add one node', () => {
        const list = new SinglyLinkedLists();
        const name = 'demo name';

        list.push({ name, id: 1 });

        expect(list.head).not.toBeNull();
        expect(list.head?.next).toBeNull();
        expect(list.head?.value?.name).toBe(name);
        expect(list.head?.value?.id).toBe(1);
    });

    it('add two nodes', () => {
        const list = new SinglyLinkedLists();

        list.push({ name: 'First user', id: 1 });
        list.push({ name: 'Second user', id: 2 });

        expect(list.head).not.toBeNull();
        expect(list.head?.next).not.toBeNull();
        expect(list.head?.next?.next).toBeNull();
        expect(list.head?.value?.id).toBe(1);
        expect(list.head?.value?.name).toBe('First user');
        expect(list.head?.next?.value?.id).toBe(list.tail?.value?.id);
        expect(list.head?.next?.value?.name).toBe(list.tail?.value?.name);
    });

    it('remove a node', () => {
        const list = new SinglyLinkedLists();

        list.push({ name: 'First user', id: 1 });
        list.push({ name: 'Second user', id: 2 });

        list.remove(2);

        console.log('list', list);

        expect(list.head?.value?.id).toBe(list.tail?.value?.id);
        expect(list.head?.value?.name).toBe(list.tail?.value?.name);
        expect(list.head?.next).toBeNull();

        list.remove(1);

        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });
});