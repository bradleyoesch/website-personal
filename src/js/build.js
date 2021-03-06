import fs from 'fs';
import mustache from 'mustache';
import sass from 'sass';

import * as Strings from './strings.js';

import { Paths } from './constants.js';


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
    templates: (fileName) => !fileName.endsWith('base.html'),
    styles: (fileName) => !(fileName.endsWith('base.scss') || fileName.endsWith('normalize.scss'))
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

/**
 * Generate html files, static files and write
 */
export const writeHtmlAndStatics = () => {
    // create base template to insert each page template into
    const baseHtmlPath = `${Paths.TEMPLATES_INPUT}base.html`;
    const baseTemplate = fs.readFileSync(baseHtmlPath, { encoding: 'utf8' });

    // write public html files
    fs.readdirSync(Paths.TEMPLATES_INPUT).filter(OnlyPublic.templates).forEach((fileName) => {
        const file = `${Paths.TEMPLATES_INPUT}${fileName}`;
        const html = getRenderedTemplate(baseTemplate, file);

        createDirectories(Paths.TEMPLATES_OUTPUT);
        fs.writeFileSync(`${Paths.TEMPLATES_OUTPUT}${fileName}`, html);
    });

    // write public css files
    fs.readdirSync(Paths.STYLES_INPUT).filter(OnlyPublic.styles).forEach((fileName) => {
        const file = `${Paths.STYLES_INPUT}${fileName}`;
        const { css } = sass.renderSync({ file });

        const name = Strings.getExtensionlessName(fileName);
        createDirectories(Paths.STYLES_OUTPUT);
        fs.writeFileSync(`${Paths.STYLES_OUTPUT}${name}.css`, css);
    });
};
