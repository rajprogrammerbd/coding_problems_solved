import hasCircle from '.';
import SinglyLinkedList from '../../DataStructure/linkedList';

describe('hasCircle', () => {
    it('should return true', () => {
        const object = new SinglyLinkedList();

        object.push(1, null);
        object.push(2, null);
        object.push(3, 2);

        const value = hasCircle(object);

        expect(value).toBeTruthy();
    });
});