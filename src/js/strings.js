// TODO: once this gets larger, split into strings, urls, paths, etc

export const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export const cleanUrl = (url) => {
    let cleaned = url;
    if (url.charAt(0) === '/') {
        cleaned = url.slice(1);
    }
    return cleaned;
};

/**
 * e.g. index.html -> index
 */
export const getExtensionlessName = (s) => {
    return s.split('.')[0];
};
