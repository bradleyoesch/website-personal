import fs from 'fs';

import { Logger } from './logger.js';
import { Path } from './constants.js';


const LOG = new Logger(import.meta.url);


// eslint-disable-next-line no-undef
const argv = process.argv;
const command = argv[2];
const args = argv.slice(3);

const Args = {
    CREATE: ['create', '--create', '-c'],
    DELETE: ['delete', '--delete', '-d', 'remove', '--remove', '-r', 'rm']
};


if (Args.CREATE.includes(command)) {
    args.forEach((arg) => {
        try {
            const templateFile = `${Path.TEMPLATES_INPUT}${arg}.html`;
            const scssFile = `${Path.STYLES_INPUT}${arg}.scss`;

            fs.copyFileSync(`${Path.TEMPLATES_INPUT}index.html`, `${Path.TEMPLATES_INPUT}${arg}.html`);
            LOG.log(`Created ${templateFile}`);

            fs.copyFileSync(`${Path.STYLES_INPUT}index.scss`, `${Path.STYLES_INPUT}${arg}.scss`);
            LOG.log(`Created ${scssFile}`);
        } catch (err) {
            LOG.error(`Error trying to create ${arg} page: `, err.message);
        }
    });
}

if (Args.DELETE.includes(command)) {
    args.forEach((arg) => {
        try {
            const templateFile = `${Path.TEMPLATES_INPUT}${arg}.html`;
            const scssFile = `${Path.STYLES_INPUT}${arg}.scss`;

            fs.unlinkSync(`${Path.TEMPLATES_INPUT}${arg}.html`);
            LOG.log(`Deleted ${templateFile}`);

            fs.unlinkSync(`${Path.STYLES_INPUT}${arg}.scss`);
            LOG.log(`Deleted ${scssFile}`);
        } catch (err) {
            LOG.error(`Error trying to delete ${arg} page: `, err.message);
        }
    });
}

