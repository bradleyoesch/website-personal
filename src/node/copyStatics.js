import fs from 'fs';
import beautify from 'js-beautify';

const REGEX_WEBSOCKET = /\<script((.|\n)*)WebSocket((.|\n)*)\<\/script\>/i;
const pages = [
    { src: 'build/index.html', dest: 'www/bradleyoesch.com/index.html' },
    {
        src: 'build/resume/index.html',
        dest: 'www/bradleyoesch.com/resume.html',
    },
    {
        src: 'build/projects/index.html',
        dest: 'www/bradleyoesch.com/projects.html',
    },
];

pages.forEach(({ src, dest }) => {
    const html = fs.readFileSync(src, { encoding: 'utf8' });
    const page = beautify.html(html).replace(REGEX_WEBSOCKET, '');
    fs.writeFileSync(dest, page);
});
