import { Buffer } from "node:buffer";
import {
    access,
    constants,
    appendFile,
    copyFile,
    readdir,
    readFile,
    rename,
    cp,
    open,
    watch,
    unlink,
    writeFile,
    FileHandle
} from "node:fs/promises";
import {
    Dirent,
    readdir as readDirCallback,
    access as accessFile,
} from "node:fs";
import path from "node:path";

console.clear();
const file_path = path.join(__dirname, 'static', 'file1.txt');

class FileSystem {
    async accessFileLog() {
        try {
            access(file_path, constants.R_OK | constants.W_OK);
            console.log('File Can be Access');
        } catch (er) {
            console.error(er);
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
        readDirCallback(__dirname, { withFileTypes: true, encoding: 'utf-8' }, (err: NodeJS.ErrnoException | null, files: Dirent[]) => {
            if (err) {
                console.error(err);
                
                return;
            }

            for (let i = 0; i < files.length; i++) {
                const current = files[i];

                console.log(`Filename: ${current.name} and is it a directory? ${current.isDirectory()}`);
            }
        });

        try {
            const dir = await readdir(__dirname, { encoding: 'utf-8', withFileTypes: true });

            for (let i = 0; i < dir.length; i++) {
                const current = dir[i];

                console.log(current.name);
            }
        } catch (er) {
            console.error(er);
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

    cp() {
        readDirCallback(__dirname, { encoding: 'utf-8', withFileTypes: true }, async (err: NodeJS.ErrnoException | null, files: any[]) => {
            if (err) {
                throw new Error(err.message);
                
                return;
            }

            for (let i = 0; i < files.length; i++) {
                const current = files[i];
                const isDirectory = current.isDirectory();

                if (isDirectory && current.name === 'static') {
                    const static_path = path.join(current.path, 'static');
                    const copied_path = path.join(__dirname, 'copied');

                    try {
                        await cp(static_path, copied_path, { recursive: true });
                        console.log('copied done');
                    } catch (er: any) {
                        throw new Error(er.message);
                    }
                }
            }
        });
    }

    async removeFiles() {
        try {
            const link = path.join(__dirname, 'static', 'demo.txt');
            await unlink(link);
            console.log(`File: ${link} has been deleted`);
            this.createNewFileIfNotExist();
        } catch (er) {
            console.error(er);
        }
    }

    async createNewFileIfNotExist() {
        const paths = path.join(__dirname, 'static', 'demo.txt');

        accessFile(paths, async (err: NodeJS.ErrnoException | null) => {
            if (err) {
                const new_link = path.join(__dirname, 'static', 'demo.txt');
                const txt = Buffer.from('Hello world!');
                await writeFile(new_link, txt);

                console.log(`File CREATED: ${new_link}`);
                return;
            }

            console.log('File found');
        });
    }

    async openExplore() {
        let opened: FileHandle;

        try {
            const new_path = path.join(__dirname, 'static', 'demo.txt');
            
            opened = await open(new_path);

            const stat = await opened.stat();

            console.log('stat ', stat);

            opened.close();
        } catch (er) {
            console.error(er);
        }
        
    }
}

const fileSystem = new FileSystem();
fileSystem.openExplore();
