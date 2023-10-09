require('dotenv').config();
import child_process from "node:child_process";
import binarySearch from "../../Algorithms/binarySearch";

const { spawn, exec, fork } = child_process;

export function useSpawn() {
    return new Promise((resolve, reject) => {
        let ls: child_process.ChildProcessWithoutNullStreams;
        if (process.env.NODE_ENV === 'development') {
            ls = spawn('dir', [], { shell: true });
        } else {
            ls = spawn('ls', []);
        }
    
    
        ls.stdout.on('data', (data) => {
            // It's not recomanded way to retrive data which length is large dataset.
            const text = data.toString();
            
            resolve(data);
        });

        ls.stdout.on('error', (err) => {
            reject(err);
        });
    });
}

export function useExec() {
    return new Promise((resolve, reject) => {
        let ls: child_process.ChildProcess;
        
        if (process.env.NODE_ENV === 'development') {
            ls = exec('dir', (err, stdout, stedrr) => {
                if (err) {
                    reject(err);
                }

                resolve(stdout);
            });
        } else {
            ls = exec('ls', (err, stdout, stedrr) => {
                if (err) {
                    reject(err);
                }

                resolve(stdout);
            });
        }
    });
}

export function useFork() {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        const child = fork(`${__dirname}/forked.ts`);

        child.send({ createRandomNumber: 100 });

        child.on('message', (arr: number[]) => {
            const search = binarySearch(arr, 100);

            resolve({ searchValue: search, duration: Date.now() - start });
        });

        child.on('error', (er) => reject(er));
    });
}

export function runAllTests() {
    return new Promise((resolve, reject) => {
        exec('yarn run test', (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }

            resolve(stdout);
        });
    });
}