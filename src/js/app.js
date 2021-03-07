import fs from 'fs';
import http from 'http';

import * as Build from './build.js';
import * as Strings from './strings.js';

import { Path } from './constants.js';
import { watch } from './watch.js';


// eslint-disable-next-line no-undef
const argv = process.argv;

const hostname = '127.0.0.1';
const port = 3000;

const mapUrl = (oldUrl) => {
    let url = oldUrl;
    if (url.charAt(0) === '/') {
        url = url.slice(1);
    }
    if (url === '') {
        url = 'index';
    }
    if (!Strings.hasExtension(url)) {
        // assume it's an html file for now
        url = `${url}.html`;
    }
    return `${Path.BASE_OUTPUT}${url}`;
};

const getContentType = (fileType) => {
    switch (fileType) {
    case 'html':
        return 'text/html; charset=utf-8';
    case 'css':
        return 'text/css';
    }
    throw Error(`Error getting content type with currently unsupported fileType: ${fileType}`);
};

// write the files
Build.writeHtmlAndStatics();

// serve the files
const server = http.createServer((req, res) => {
    try {
        const path = mapUrl(req.url);
        const file = fs.readFileSync(path, { encoding: 'utf8' });

        const fileType = path.split('.')[path.split('.').length - 1];
        const contentType = getContentType(fileType);

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(file);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        res.statusCode = 404;
        res.end(null);
        return;
    }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    /* eslint-disable no-console */
    console.log(`Server running at http://${hostname}:${port}/`);

    if (argv.includes('--watch') || argv.includes('-w')) {
        console.log(`Watching ${Path.TEMPLATES_INPUT}`);
        watch(Path.TEMPLATES_INPUT, Build.writeHtml);

        console.log(`Watching ${Path.STYLES_INPUT}`);
        watch(Path.STYLES_INPUT, Build.writeCss);
    }
    /* eslint-enable no-console */
});

