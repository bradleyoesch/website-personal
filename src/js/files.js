import fs from 'fs';
import { Page } from './constants.js';
import * as Sass from './sass.js';
import Mustache from 'mustache';

const Paths = {
    TEMPLATES: 'src/templates/',
    STYLES: 'static/styles/'
};

const FileType = {
    HTML: 'HTML',
    CSS: 'CSS'
};

const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const getTitle = (title) => {
    return `${capitalize(title)} | Bradley Oesch`;
};

const getExtensionlessName = (s) => {
    return s.split('.')[0];
};

const getContentType = (fileType) => {
    switch (fileType) {
    case FileType.HTML:
        return 'text/html; charset=utf-8';
    case FileType.CSS:
        return 'text/css';
    }
    throw Error(`Error getting content type with fileType: ${fileType}`);
};

const createRenderObject = (output, fileType) => {
    return {
        output,
        contentType: getContentType(fileType)
    };
};

const getHtmlPathKey = (path) => {
    const key = path.replace(Paths.TEMPLATES, '').replace('.html', '');
    return key ? key !== Page.INDEX.toLowerCase() : '';
};

export const buildRenderMap = () => {
    const renderMap = {};

    // generate all static files first
    Object.values(Page).forEach((page) => {
        Sass.generateCssFor(page);
    });

    // add template converted html to map
    fs.readdirSync(Paths.TEMPLATES).forEach((fileName) => {
        const path = `${Paths.TEMPLATES}${fileName}`;
        const template = fs.readFileSync(path, { encoding: 'utf8' });


        const page = getExtensionlessName(fileName);
        const view = {
            page,
            title: getTitle(page),
            content: 'Hello World',
        };
        const html = Mustache.render(template, view);

        const key = getHtmlPathKey(path);
        renderMap[key] = createRenderObject(html, FileType.HTML);
    });

    // add generated styles to map
    fs.readdirSync(Paths.STYLES).forEach((fileName) => {
        const path = `${Paths.STYLES}${fileName}`;
        const styles = fs.readFileSync(path, { encoding: 'utf8' });

        renderMap[path] = createRenderObject(styles, FileType.CSS);
    });

    return renderMap;
};
