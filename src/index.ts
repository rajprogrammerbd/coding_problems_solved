import BST from "./DataStructure/binarySearchTree";
import Stack from "./DataStructure/Stack";
import Queue from "./DataStructure/Queue";
import HashMap from "./DataStructure/hashTable";

const data = new BST();

data.remove(4);
data.remove(7);

const stacks = new Stack();

stacks.push(1);
stacks.pop();

console.log('stacks ', stacks);

const queue = new Queue();

console.log('queue', queue);

data.push(5);
data.push(7);
data.push(6);
data.push(4);
data.push(3);
data.push(1);
data.push(2);

console.log('breathe first search ', data.breatheFirstSearch());
console.log('depth first search pre-order', data.depthFirstSearchPreOrder());
console.log('depth first search in-order', data.depthFirstSearchInOrder());
console.log('depth first search post-order', data.depthFirstSearchPostOrder());

const hashMap = new HashMap(10);

hashMap.set('me', 'Raj Dutta');
hashMap.set('sister', 'Dola Dutta');
hashMap.set('my father', 'Taposh Dutta');
hashMap.set('mummy', 'Aroti Rani Dutta');

console.log('hashMap', hashMap);
