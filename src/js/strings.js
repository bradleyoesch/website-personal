// TODO: once this gets larger, split into strings, urls, paths, etc

export const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * e.g. foo/bar/index.html -> index
 */
export const getExtensionlessName = (s) => {
    const split = s.split('.')[0].split('/');
    return split[split.length - 1];
};

export const hasExtension = (s) => {
    return s.indexOf('.') >= 0;
};
