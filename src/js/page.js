import fs from 'fs';

import { Paths } from './constants.js';


// eslint-disable-next-line no-undef
const argv = process.argv;
const command = argv[2];
const args = argv.slice(3);

const Args = {
    CREATE: ['create', '--create', '-c'],
    DELETE: ['delete', '--delete', '-d', 'remove', '--remove', '-r', 'rm']
};


/* eslint-disable no-console */
if (Args.CREATE.includes(command)) {
    args.forEach((arg) => {
        try {
            const templateFile = `${Paths.TEMPLATES_INPUT}${arg}.html`;
            const scssFile = `${Paths.STYLES_INPUT}${arg}.scss`;

            fs.copyFileSync(`${Paths.TEMPLATES_INPUT}index.html`, `${Paths.TEMPLATES_INPUT}${arg}.html`);
            console.log(`Created ${templateFile}`);

            fs.copyFileSync(`${Paths.STYLES_INPUT}index.scss`, `${Paths.STYLES_INPUT}${arg}.scss`);
            console.log(`Created ${scssFile}`);
        } catch (err) {
            console.error(`Error trying to create ${arg} page: `, err.message);
        }
    });
}

if (Args.DELETE.includes(command)) {
    args.forEach((arg) => {
        try {
            const templateFile = `${Paths.TEMPLATES_INPUT}${arg}.html`;
            const scssFile = `${Paths.STYLES_INPUT}${arg}.scss`;

            fs.unlinkSync(`${Paths.TEMPLATES_INPUT}${arg}.html`);
            console.log(`Deleted ${templateFile}`);

            fs.unlinkSync(`${Paths.STYLES_INPUT}${arg}.scss`);
            console.log(`Deleted ${scssFile}`);
        } catch (err) {
            console.error(`Error trying to delete ${arg} page: `, err.message);
        }
    });
}
/* eslint-enable no-console */

