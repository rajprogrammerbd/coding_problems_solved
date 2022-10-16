import BST from "./DataStructure/binarySearchTree";
import Stack from "./DataStructure/Stack";
import Queue from "./DataStructure/Queue";

const data = new BST();

data.push(5);
data.push(7);
data.push(6);
data.push(4);
data.push(3);
data.push(1);
data.push(2);

data.remove(4);
data.remove(7);

console.log('data structure ', data.traverse());

const stacks = new Stack();

stacks.push(1);
stacks.pop();

console.log('stacks ', stacks);

const queue = new Queue();

console.log('queue', queue);