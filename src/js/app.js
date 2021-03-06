import http from 'http';
import { promises as fs } from 'fs';
import Mustache from 'mustache';

const hostname = '127.0.0.1';
const port = 3000;

const getTitle = (title) => {
    return `${title} | Bradley Oesch`;
};

const view = {
    title: getTitle('Base'),
    content: 'Hello World'
};

const file = fs.readFile('src/templates/base.html', 'utf8');

file.then((contents) => {
    const html = Mustache.render(contents, view);

    //Create HTTP server and listen on port 3000 for requests
    const server = http.createServer((req, res) => {

        //Set the response HTTP header with HTTP status and Content type
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(html);
    });

    //listen for request on port 3000, and as a callback function have the port listened on logged
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});

