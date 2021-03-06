import fs from 'fs';
import sass from 'sass';

const INPUT_PATH = 'src/scss/';
const OUTPUT_PATH = 'static/styles/';

/**
 * Generate css for a Page value
 */
export const generateCssFor = (page) => {
    const filename = page.toLowerCase();
    const result = sass.renderSync({ file: `${INPUT_PATH}${filename}.scss` });

    if (!fs.existsSync(OUTPUT_PATH)) {
        fs.mkdirSync(OUTPUT_PATH, { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
        });
    }
    fs.writeFileSync(`${OUTPUT_PATH}${filename}.css`, result.css);
};
