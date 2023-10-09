console.clear();
import { cpus } from 'node:os';
process.env.UV_THREADPOOL_SIZE = cpus.length.toString();
require('dotenv').config();
import { runAllTests } from "./nodeModuleImplementation/child_process";



// First running all the testcases...
runAllTests()
    .then(testResult => console.log(testResult))
    .catch(er => console.error(er));

console.log(process.env.UV_THREADPOOL_SIZE);