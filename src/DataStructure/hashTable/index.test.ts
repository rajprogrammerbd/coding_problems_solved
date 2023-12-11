import HashMapObject, { LinkedList } from ".";

describe('HashMapObject', () => {
    it('should create empty hashMap', () => {
        const map = new HashMapObject();

        expect(map.keys().length).toBe(0);
    });

    it('should add a value', () => {
        const map = new HashMapObject();
        const list = new LinkedList();

        list.push({ name: 'Student 01', roll: 1 });

        map.set('CLASS_01', list);

        expect(map.keys()[0]).toBe('CLASS_01');
    });

    it('should not add dual value', () => {
        const map = new HashMapObject();
        const list = new LinkedList();
        const anotherList = new LinkedList();

        list.push({ name: 'Student 01', roll: 1 });
        list.push({ name: 'Student 02', roll: 2 });

        map.set('CLASS_01', list);
        map.set('CLASS_01', anotherList);

        expect(map.keys().length).toBe(1);
    });

    it('should add new class Value', () => {
        const map = new HashMapObject();
        const list1 = new LinkedList();
        const list2 = new LinkedList();

        const keys = ['CLASS_01', 'CLASS_02'];

        map.set('CLASS_01', list1);
        map.set('CLASS_02', list2);

        expect(map.keys().length).toBe(keys.length);
        expect(map.keys()).toEqual(expect.arrayContaining(keys));
    });

    it('should return false', () => {
        const map = new HashMapObject();

        expect(map.get('CLASS_01')).toBeFalsy();
    });

    it('should return true', () => {
        const map = new HashMapObject();
        const list = new LinkedList();

        map.set('CLASS_01', list);

        expect(map.get('CLASS_01')).toBeTruthy();
    });
});
