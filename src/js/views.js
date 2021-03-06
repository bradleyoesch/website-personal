import fs from 'fs';
import { Page } from './constants.js';
import * as Sass from './sass.js';
import Mustache from 'mustache';
import * as Strings from './strings.js';

export const Paths = {
    TEMPLATES: 'src/templates/',
    STYLES: 'static/styles/'
};

const FilterPublic = {
    pages: (page) => page !== Page.BASE,
    templates: (fileName) => !fileName.endsWith('base.html'),
    styles: (fileName) => !(fileName.endsWith('base.scss') || fileName.endsWith('normalize.scss'))
};

const FileType = {
    HTML: 'HTML',
    CSS: 'CSS'
};

const getTitle = (title) => {
    return `${Strings.capitalize(title)} | Bradley Oesch`;
};

/**
 * Render the template and return the result
 * TODO: actual content
 */
const getRenderedTemplate = (baseTemplate, fileName) => {
    const path = `${Paths.TEMPLATES}${fileName}`;
    const template = fs.readFileSync(path, { encoding: 'utf8' });

    const page = Strings.getExtensionlessName(fileName);
    const title = getTitle(page);
    const content = Mustache.render(template, {});
    const view = { page, title, content };
    return Mustache.render(baseTemplate, view);
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

/**
 * Values inside the path map
 */
const createRenderObject = (output, fileType) => {
    return {
        output,
        contentType: getContentType(fileType)
    };
};

/**
 * Build a map of path to render object. Everything sync rn bc it takes like two seconds
 * e.g.
 * {
 *     'static/styles/foo.css': { css string, css content type },
 *     'foo': { html string, html content type },
 *     'foo/subpage': { html string, html content type }
 * }
 */
export const buildPathMap = () => {
    const pathMap = {};

    // generate all static files first
    Object.values(Page).filter(FilterPublic.pages).forEach((page) => {
        Sass.generateCssFor(page);
    });

    // add template converted html to map
    const baseHtmlPath = `${Paths.TEMPLATES}base.html`;
    const baseTemplate = fs.readFileSync(baseHtmlPath, { encoding: 'utf8' });

    fs.readdirSync(Paths.TEMPLATES).filter(FilterPublic.templates).forEach((fileName) => {
        const name = Strings.getExtensionlessName(fileName);
        const key = name !== Page.INDEX.toLowerCase() ? name : '';

        const html = getRenderedTemplate(baseTemplate, fileName);

        pathMap[key] = createRenderObject(html, FileType.HTML);
    });

    // add generated styles to map
    fs.readdirSync(Paths.STYLES).filter(FilterPublic.styles).forEach((fileName) => {
        const path = `${Paths.STYLES}${fileName}`;
        const styles = fs.readFileSync(path, { encoding: 'utf8' });

        pathMap[path] = createRenderObject(styles, FileType.CSS);
    });

    return pathMap;
};
