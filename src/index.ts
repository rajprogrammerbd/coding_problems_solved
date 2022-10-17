import BST from "./DataStructure/binarySearchTree";
import Stack from "./DataStructure/Stack";
import Queue from "./DataStructure/Queue";

const data = new BST();

// data.remove(4);
// data.remove(7);

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
console.log('depth first search ', data.depthFirstSearchPreOrder());