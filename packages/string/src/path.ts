const backslashRegExp = /\\/g;
export const directorySeparator = "/";

/**
 * Normalize path separators, converting `\` into `/`.
 */
export function normalizeSlashes(path: string): string {
    const index = path.indexOf("\\");
    if (index === -1) {
        return path;
    }
    backslashRegExp.lastIndex = index;
    return path.replace(backslashRegExp, directorySeparator);

}
