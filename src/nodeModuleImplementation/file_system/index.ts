import { Buffer } from "node:buffer";
import {
    access,
    constants,
    appendFile,
    copyFile,
    opendir,
    readFile,
    rename,
    open,
    watch
} from "node:fs/promises";
import path from "node:path";

console.clear();
const file_path = path.join(__dirname, 'static', 'file1.txt');

class FileSystem {
    async accessFileLog() {
        // Example of checking if the data can be accessible or not.
        try {
            await access(file_path, constants.R_OK | constants.W_OK);

            console.log('Can Access the file');
        } catch (er) {
            console.error(er);
            console.log("Can't access the file");
        }
    }

    async appendingData() {
        // Example of appending text to the existing file.
        try {
            const data = Buffer.from("Hello world! This is generated text", "utf-8");
            await appendFile(file_path, data, 'utf-8');

            console.log('Data is appened!');
        } catch (er) {
            console.error(er);
        }
    }

    async copiedFile() {
        try {
            const destination = path.join(__dirname, "dir", 'file2.txt');
            await copyFile(file_path, destination);
        } catch (er) {
            console.error(er);
        }
    }

    async openWholeDirectory() {
        try {
            const dir = await opendir('./');
            for await (const dirent of dir)
              console.log(dirent.name);
          } catch (err) {
            console.error(err);
          }
    }

    async readWholeFile() {
        try {
            const file_path = path.join(__dirname, 'static', 'file2.txt');
            const buf = await readFile(file_path);

            console.log(buf.toString());
        } catch (er) {
            console.error(er);
        }
    }

    async renamedFile() {
        try {
            const file_path = path.join(__dirname, 'static', 'temp.txt');
            const newPath = path.join(__dirname, 'static', 'copiedText.txt');
            await rename(file_path, newPath);
            await rename(newPath, file_path);

            console.log("Rename successful");
        } catch (er) {
            console.error(er);
        }
    }

    async opened() {
        try {
            const res = await open(file_path);
            
            const text = await res.readFile('utf-8');

            console.log(text);

            await res.close();
        } catch (err) {
            console.error(err);
        }
    }

    async watcher() {
        const watcher = watch(file_path);

        for await (const event of watcher) {
            console.log(event);
        }
    }
}

const fileSystem = new FileSystem();
fileSystem.watcher();
