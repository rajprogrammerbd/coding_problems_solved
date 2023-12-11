require('dotenv').config();
process.env.UV_THREADPOOL_SIZE = '4';
import { runAllTests } from "./nodeModuleImplementation/child_process";

// First running all the testcases...
runAllTests()
    .then(testResult => console.log(testResult))
    .catch(er => console.error(er));
