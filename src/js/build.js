import fs from 'fs';
import mustache from 'mustache';
import sass from 'sass';

import * as Strings from './strings.js';

import { Path } from './constants.js';


const getTitle = (title) => {
    return `${Strings.capitalize(title)} | Bradley Oesch`;
};

/**
 * Render the template and return the result
 */
const getRenderedTemplate = (baseTemplate, file) => {
    const template = fs.readFileSync(file, { encoding: 'utf8' });

    const page = Strings.getExtensionlessName(file);
    const title = getTitle(page);
    const content = mustache.render(template, {});
    const view = { page, title, content };

    return mustache.render(baseTemplate, view);
};

/**
 * Functions to filter to only public files
 */
const OnlyPublic = {
    templates: (filename) => !filename.endsWith('base.html'),
    styles: (filename) => !(filename.endsWith('base.scss') || filename.endsWith('normalize.scss'))
};

const createDirectories = (path) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
        });
    }
};

const createBaseTemplate = () => {
    const baseHtmlPath = `${Path.TEMPLATES_INPUT}base.html`;
    return fs.readFileSync(baseHtmlPath, { encoding: 'utf8' });
};

export const writeHtml = (path, filename, baseTemplate) => {
    if (!baseTemplate) {
        baseTemplate = createBaseTemplate();
    }
    const file = `${path}${filename}`;
    const html = getRenderedTemplate(baseTemplate, file);

    createDirectories(Path.TEMPLATES_OUTPUT);
    fs.writeFileSync(`${Path.TEMPLATES_OUTPUT}${filename}`, html);
};

export const writeCss = (path, filename) => {
    const file = `${path}${filename}`;
    const { css } = sass.renderSync({ file });

    const name = Strings.getExtensionlessName(filename);
    createDirectories(Path.STYLES_OUTPUT);
    fs.writeFileSync(`${Path.STYLES_OUTPUT}${name}.css`, css);
};

/**
 * Generate html files, static files and write
 */
export const writeHtmlAndStatics = () => {
    // remove everything in output directory
    fs.rmdirSync(`${Path.BASE_OUTPUT}`, { recursive: true });

    const baseTemplate = createBaseTemplate();

    // write public html files
    fs.readdirSync(Path.TEMPLATES_INPUT).filter(OnlyPublic.templates).forEach((filename) => {
        writeHtml(Path.TEMPLATES_INPUT, filename, baseTemplate);
    });

    // write public css files
    fs.readdirSync(Path.STYLES_INPUT).filter(OnlyPublic.styles).forEach((filename) => {
        writeCss(Path.STYLES_INPUT, filename);
    });
};
