console.clear();
import { Buffer } from "node:buffer";

// Create Buffer data from a string.
const buff1 = Buffer.from('Hello World!');

console.log('buff1 ', buff1);

// Alloc a buffer with specified size filled with zeros.
const buff2 = Buffer.alloc(12);

buff2[0] = 0x48;
buff2[1] = 0x65;
buff2[2] = 0x6c;
buff2[3] = 0x6c;
buff2[4] = 0x6f;
buff2[5] = 0x20;
buff2[6] = 0x57;
buff2[7] = 0x6f;
buff2[8] = 0x72;
buff2[9] = 0x6c;
buff2[10] = 0x64;
buff2[11] = 0x21;

// Result will be same as 'buff1'
console.log('buff2', buff2.toString());

const buff3 = Buffer.alloc(50);
buff3.write('Hello', 3);
console.log(buff3);

// Check if the two buffers contains the same type of data or not and return boolean value
console.log('equal -> ', buff1.equals(buff2));

// Used to copy
const buff4 = Buffer.from('Hello');
const buff5 = Buffer.allocUnsafe(4);
buff4.copy(buff5);
console.log('buff5', buff5, buff5.toString('utf-8'))

// concat
const buff6 = Buffer.concat([buff4, buff5]);
console.log('buff6', buff6.toString());
