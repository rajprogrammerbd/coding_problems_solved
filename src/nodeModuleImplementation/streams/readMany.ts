import path from "node:path";
import fs from "node:fs/promises";

async function readMany() {
    try {
        console.time('readMany');
        const readable_path = path.join(__dirname, "test.txt");
        const writeable_path = path.join(__dirname, "demo.txt");

        const readableStream = await fs.open(readable_path, 'r');
        const writeableStream = await fs.open(writeable_path, 'w');

        const w_stream = writeableStream.createWriteStream();
        const waterMarkSize = w_stream.writableHighWaterMark;

        const r_stream = readableStream.createReadStream({ highWaterMark: waterMarkSize });

        r_stream.on('data', (chunk) => {
            const result = w_stream.write(chunk);

            if (!result) {
                r_stream.pause();
            }
        });

        r_stream.on('close', () => {
            console.timeEnd('readMany');
        });

        w_stream.on('drain', () => {
            r_stream.resume();
        });

    } catch (er) {
        console.error(er);
    }
}

readMany();
