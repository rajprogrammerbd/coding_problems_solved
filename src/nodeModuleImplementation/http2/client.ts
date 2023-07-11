// This is the example of HTTP2 Client

// Dependency
import http2 from 'node:http2';

// Create client
const client = http2.connect('http://localhost:6000');

// Create a request
const req = client.request({
   ':path': '/'
});

let str = "";
req.on('data', function (chunk) {
    str += chunk;
});

req.on('end', function () {
    console.log(str);
});

req.end();
