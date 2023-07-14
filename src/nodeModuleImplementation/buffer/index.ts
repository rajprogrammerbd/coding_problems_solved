console.clear();

const buff1 = Buffer.alloc(9);

buff1.write('Raj Dutta', 'utf-8');

const myFullName = Buffer.from("Raj Dutta");

console.log(buff1.toString());
console.log(myFullName.length);

for (const val of myFullName.entries()) {
    console.log(String.fromCharCode(val[1]));
}
