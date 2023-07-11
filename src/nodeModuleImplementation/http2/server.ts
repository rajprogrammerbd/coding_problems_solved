// Import dependency
import http2 from 'node:http2';

// Init the server
const server = http2.createServer();

// On a stream, sends back hello world.
server.on('stream', (stream, headers) => {
    stream.respond({
        'status': 200,
        'content-type': 'text/html',
    });

    stream.end('<!DOCTYPE html><head><title>My custom build page</title></head><body><p>Hello World!</p></body>')
});

server.listen(6000);
