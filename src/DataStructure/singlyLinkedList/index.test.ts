import SinglyLinkedListed from './';

describe('SinglyLinkedListed', () => {
    it('should return an object', () => {
        const object = new SinglyLinkedListed();

        expect(object.len()).toBe(0);
    });

    it('should return the same result for head and tail', () => {
        const object = new SinglyLinkedListed();

        object.push(1);

        expect(object.getHead()?.value).toBe(1);
        expect(object.getTail()?.value).toBe(1);
    });

    it('should return not the same result for head and tail', () => {
        const object = new SinglyLinkedListed();

        object.push(1);
        object.push(2);

        expect(object.getHead()?.value).toBe(1);
        expect(object.getTail()?.value).toBe(2);
    });

    it('should return the last item', () => {
        const object = new SinglyLinkedListed();

        for (let i = 1; i <= 20; i++) {
            object.push(i);
        }
        
        object.pop();

        expect(object.getHead()?.value).toBe(1);
        expect(object.getTail()?.value).toBe(19);
    });

    it('should return null as head and tail value', () => {
        const object = new SinglyLinkedListed();

        object.push(1);

        object.pop();

        expect(object.getHead()).toBeNull();
        expect(object.getTail()).toBeNull();
    });

    it('should return 1 as head and tail value', () => {
        const object = new SinglyLinkedListed();

        object.push(1);
        object.push(2)

        object.pop();

        expect(object.getHead()?.value).toBe(1);
        expect(object.getTail()?.value).toBe(1);
        expect(object.len()).toBe(1);
    });

    describe('remove duplicates', () => {
        it('should be only item 1 and 2', () => {
            const object = new SinglyLinkedListed();

            object.push(1);
            object.push(2);
            object.push(2);
            object.push(1);
    
            object.removeDuplicates();
    
            expect(object.getHead()?.value).toBe(1);
            expect(object.getTail()?.value).toBe(2);
        });

        it('should return 3 and 4', () => {
            const object = new SinglyLinkedListed();

            object.push(3);
            object.push(4);
            object.push(3);

            object.removeDuplicates();

            expect(object.getHead()?.value).toBe(3);
            expect(object.getTail()?.value).toBe(4);
            expect(object.len()).toBe(2);
        });
    });

    describe('circle test with linkedlist', () => {
        it('should have a circle', () => {
            const object = new SinglyLinkedListed();

            const temp = object.push(1);
            object.push(2, temp);

            const head = object.getHead();
            expect(head?.value).toBe(1);
            expect(head?.next?.value).toBe(2);
            expect(head?.next?.next?.value).toBe(1);
        });

        it('should detech a circle within a LinkedList', () => {
            const object  = new SinglyLinkedListed();
            const temp = object.push(0);

            for (let i = 1; i <= 200; i++) {
                if (i === 200) {
                    object.push(i, temp);
                } else object.push(i);
            }

            const hasCircle = object.hasCircle();

            expect(hasCircle).toBeTruthy();
        });

        it('should not have a circle', () => {
            const object = new SinglyLinkedListed();

            for (let i = 0; i < 1000; i++) {
                object.push(i);
            }

            const hasCircle = object.hasCircle();
            expect(hasCircle).toBeFalsy();
        });
    });
});