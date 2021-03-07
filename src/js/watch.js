import fs from 'fs';

import * as Build from './build.js';


const HIGH_IMPACT_FILES = [
    'base.html',
    'base.scss',
    'normalize.scss'
];

export const watch = (path, callback) => {
    fs.watch(path, {
        persistent: true,
        recursive: true
    }, (event, filename) => {
        if (filename) {
            // eslint-disable-next-line no-console
            console.log(`File update: ${path}${filename}`);

            if (HIGH_IMPACT_FILES.includes(filename)) {
                // changes to these files affect multiple other files
                // we could be smarter about html vs css changes
                // but who cares, update everything
                // eslint-disable-next-line no-console
                console.log(`High impact change: ${filename}, rewriting all files`);
                Build.writeHtmlAndStatics();
            } else {
                callback(path, filename);
            }
        }
    });
};
