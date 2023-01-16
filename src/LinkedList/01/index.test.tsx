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

    it('should return false', () => {
        const object = new SinglyLinkedList();

        object.push(1, null);
        object.push(2, null);
        object.push(3, null);

        const value = hasCircle(object);

        expect(value).toBeFalsy();
    });

    it('should return true', () => {
        const object = new SinglyLinkedList();

        object.push(5, null);
        object.push(6, null);
        object.push(8, null);
        object.push(10, 5);

        const value = hasCircle(object);

        expect(value).toBeTruthy();
    });
});