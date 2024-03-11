import SinglyedLinkedList from "./index";

describe("SinglyedLinkedList", () => {
    it('should have not a circle', () => {
        const list = new SinglyedLinkedList();

        for (let i = 0; i < 100; i++) {
            list.insert(i);
        }

        expect(list.hasCircle).toBeFalsy();
    });

    it("should have a circle", () => {
        const list = new SinglyedLinkedList();

        const first = list.insert(0);
        for (let i = 1; i < 1000; i++) {
            list.insert(i);
        }

        list.insert(1000, first);

        expect(list.hasCircle).toBeTruthy();
    });

    it('should not find the value of 0', () => {
        const list = new SinglyedLinkedList();

        for (let i = 0; i <= 20; i++) {
            list.insert(i);
        }

        list.remove(0);
        list.remove(20);

        expect(list.head?.value).not.toBe(0);
    });

    it('should not have a circle', () => {
        const list = new SinglyedLinkedList();

        expect(list.hasCircle).toBeFalsy();
    });

    it('should have return an array', () => {
        const list = new SinglyedLinkedList();

        list.insert(1);
        list.insert(2);

        expect(list.items).toEqual(expect.arrayContaining([1, 2]));
    });
});
