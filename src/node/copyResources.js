import fs from 'fs';
import fse from 'fs-extra';

const IMG_SRC = 'resources/img';
const IMG_DEST = 'build/public/img';

if (!fs.existsSync(IMG_DEST)) {
    fs.mkdirSync(IMG_DEST, { recursive: true });
}

fse.copySync(IMG_SRC, IMG_DEST);
