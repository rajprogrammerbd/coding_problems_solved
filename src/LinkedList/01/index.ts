
import SinglyLinkedList, { Node } from "../../DataStructure/linkedList";

export default function hasCircle(list: SinglyLinkedList): boolean {
    let slowPointer: Node | null;
    let fastPointer: Node | null;

    slowPointer = list.head;
    fastPointer = list.head;

    do {
        if (slowPointer?.next !== undefined) {
            slowPointer = slowPointer.next;
        }

        if (fastPointer?.next?.next !== undefined) {
            fastPointer = fastPointer.next?.next;
        } else {
            return false;
        }
    }  while (slowPointer?.value !== fastPointer?.value && slowPointer !== null && fastPointer !== null);

    return true;
}
