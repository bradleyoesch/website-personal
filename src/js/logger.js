import { fileURLToPath } from 'url';

const Log = {
    DEBUG: 'DEBUG',
    LOG: 'LOG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
};

const Color = {
    RESET: '\x1b[0m',
    RED: '\x1b[31m',
    GREEN: '\x1b[32m',
    YELLOW: '\x1b[33m',
    BLUE: '\x1b[34m',
    MAGENTA: '\x1b[35m',
    CYAN: '\x1b[36m',
    WHITE: '\x1b[37m',
};

export class Logger {
    constructor(file) {
        // eslint-disable-next-line no-undef
        this.file = fileURLToPath(file).split(process.env.BASE_PATH)[1];
    }

    _color(func, str) {
        let color = Color.RESET;
        switch(func) {
        case Log.DEBUG:
            color = Color.YELLOW;
            break;
        case Log.LOG:
            color = Color.WHITE;
            break;
        case Log.INFO:
            color = Color.CYAN;
            break;
        case Log.WARN:
            color = Color.MAGENTA;
            break;
        case Log.ERROR:
            color = Color.RED;
            break;
        default:
        }
        return `${color}${str}${Color.RESET}`;
    }

    _log(func, ...args) {
        const now = new Date().toISOString();
        const prefix = `${now} [${this.file}] ${func}`;
        // eslint-disable-next-line no-console
        console[func.toLowerCase()](this._color(func, prefix), ...args);
    }

    debug(...args) {
        this._log(Log.DEBUG, ...args);
    }

    log(...args) {
        this._log(Log.LOG, ...args);
    }

    info(...args) {
        this._log(Log.INFO, ...args);
    }

    warn(...args) {
        this._log(Log.WARN, ...args);
    }

    error(...args) {
        this._log(Log.ERROR, ...args);
    }
}
