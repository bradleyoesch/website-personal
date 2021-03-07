import fs from 'fs';

import * as Build from './build.js';


export const watch = (path, callback) => {
    fs.watch(path, {
        persistent: true,
        recursive: true
    }, (event, subPath) => {
        if (subPath) {
            // eslint-disable-next-line no-console
            console.log(`File update: ${path}${subPath}`);

            const isFileAtRoot = subPath.indexOf('/') === -1;
            if (!isFileAtRoot) {
                // changes to these files within subdirectories may affect mutliple files
                // we could be smarter about html vs css changes but who cares, update everything
                // eslint-disable-next-line no-console
                console.log(`High impact change: ${subPath}, rewriting all files`);
                Build.writeHtmlAndStatics();
            } else {
                callback(path, subPath);
            }
        }
    });
};
