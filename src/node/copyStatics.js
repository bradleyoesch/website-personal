import fs from 'fs';
import fse from 'fs-extra';
import beautify from 'js-beautify';

const REGEX_WEBSOCKET = /\<script((.|\n)*)WebSocket((.|\n)*)\<\/script\>/i;
const IMG_PATH_REGEX = /\/public\/img\//g;

const IMG_SRC = 'build/public/img';
const IMG_DEST = 'www/bradleyoesch.com/img';

const PAGES = [
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

const copyHtml = () => {
    PAGES.forEach(({ src, dest }) => {
        let html = fs.readFileSync(src, { encoding: 'utf8' });
        html = beautify.html(html);
        html = html.replace(REGEX_WEBSOCKET, '');
        html = html.replaceAll(IMG_PATH_REGEX, 'http://bradleyoesch.com/img/');
        fs.writeFileSync(dest, html);
    });
};

const copyImages = () => {
    if (!fs.existsSync(IMG_DEST)) {
        fs.mkdirSync(IMG_DEST, { recursive: true });
    }

    fse.copySync(IMG_SRC, IMG_DEST);
};

copyHtml();
copyImages();
