import fs from "node:fs";
import path from "node:path";
import { Buffer } from "node:buffer";

// Execution Time 8 Min.
async function writeMany() {
  console.time('writeMany');
  const fileName = 'test.txt';
  const fullPath = path.join(__dirname, fileName);

  try {
    const fileHandle = await fs.promises.open(fullPath, 'w');

    async function recursive(i: number) {
      if (i > 1000000) {
        console.timeEnd('writeMany');
        await fileHandle.close();
        return;
      }

      const num = Buffer.from(` ${i} `);
      await fs.promises.appendFile(fullPath, num);
      recursive(i + 1);
    }

    recursive(0);
  } catch (err) {
    console.error('Error:', err);
  }
}

// writeMany();

// Faster than the promises API
function callback() {
  console.time('writeMany');
  const fileName = 'test.txt';
  const fullPath = path.join(__dirname, fileName);

  fs.open(fullPath, "w", (err: NodeJS.ErrnoException | null, fd: number) => {
    if (err) {
      throw new Error(err.message);
    }
    
    for (let i = 0; i < 1000000; i++) {
      fs.write(fd, ` ${i} `, () => {});
    }

    console.timeEnd('writeMany');
  });
}

// callback();

async function streamsCalling() {
  try {
    console.time('writeMany');
    const fileName = 'test.txt';
    const fullPath = path.join(__dirname, fileName);
  
    const fileHandle = await fs.promises.open(fullPath, 'w');

    const stream = fileHandle.createWriteStream();
    let totalCount = 1000000;
    let loopCount = 0;

    function recursive() {
      if (totalCount >= loopCount) {
        const buff = Buffer.from(` ${loopCount} `, 'utf-8');
        loopCount++;

        const result = stream.write(buff);

        if (totalCount === loopCount) {
          return stream.end();
        }

        if (!result) {
          return;
        } else {
          recursive();
        }
      }
    }

    recursive();

    stream.on('drain', () => {
      recursive();
    });

    stream.on('finish', () => {
      fileHandle.close();
      console.timeEnd('writeMany');
    });
  } catch (er) {
    console.error(er);
  }
}

streamsCalling();
