console.clear();

import BST from "./DataStructure/binarySearchTree";
import Stack from "./DataStructure/Stack";
import Queue from "./DataStructure/Queue";
import MaxBinaryHeap from "./DataStructure/binaryHeap/MaxBinaryHeap";

const data = new BST();

// data.remove(4);
// data.remove(7);

const stacks = new Stack();

stacks.push(1);
stacks.pop();

// console.log('stacks ', stacks);

const queue = new Queue();

// console.log('queue', queue);

data.push(5);
data.push(7);
data.push(6);
data.push(4);
data.push(3);
data.push(1);
data.push(2);


const heap = new MaxBinaryHeap();

// console.log('breathe first search ', data.breatheFirstSearch());
// console.log('depth first search pre-order', data.depthFirstSearchPreOrder());
// console.log('depth first search in-order', data.depthFirstSearchInOrder());
// console.log('depth first search post-order', data.depthFirstSearchPostOrder());

heap.insert(41);
heap.insert(42);
heap.insert(45);

console.log('maxBinaryHeap', heap);