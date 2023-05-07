import {normalizeSlashes} from "../path";

test('normalizeSlashes: "\\" -> "/" ', () => {
    expect(normalizeSlashes("c:\\test.txt")).toBe("c:/test.txt");

    expect(normalizeSlashes("c:/test.txt")).toBe("c:/test.txt");
});
