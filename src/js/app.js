import http from 'http';

import * as Files from './files.js';
import * as Strings from './strings.js';

const hostname = '127.0.0.1';
const port = 3000;


const pathMap = Files.buildPathMap();

const server = http.createServer((req, res) => {

    const url = Strings.cleanUrl(req.url);
    const render = pathMap[url];
    if (!render) {
        res.statusCode = 404;
        res.end(null);
        return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', render.contentType);
    res.end(render.output);
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running at http://${hostname}:${port}/`);
});

