// Dependency
import vm from 'node:vm';

// Define a context for the script to run in
const context = {
    'foo': 25
}

// define the script
const scripts = new vm.Script(`
    foo = foo * 2;
    var bar = foo + 1;
    var fizz = 52;
    const thisWontAdded = true;
`);

// run the script
scripts.runInNewContext(context);
console.log(context);