import http from 'http';

import * as Files from './files.js';

const hostname = '127.0.0.1';
const port = 3000;


const renderMap = Files.buildRenderMap();

const cleanUrl = (url) => {
    let cleaned = url;
    if (url.charAt(0) === '/') {
        cleaned = url.slice(1);
    }
    return cleaned;
}

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    const url = cleanUrl(req.url);
    console.log('req');
    console.log('req');
    console.log('req');
    console.log(url);
    console.log(Object.keys(renderMap))

    const render = renderMap[url];
    console.log(render)
    if (!render) {
        res.statusCode = 404;
        res.end(null);
        return;
    }

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', render.contentType);
    res.end(render.output);
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

