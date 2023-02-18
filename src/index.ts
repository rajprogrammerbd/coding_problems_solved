import SinglyLinkedLists from "./LinkedList/02";

const list = new SinglyLinkedLists();

list.push({ name: 'First user', id: 1 });
list.push({ name: 'Second user', id: 2 });
list.push({ name: 'Third user', id: 3 })

list.remove(2);

console.log('list', list.tail);