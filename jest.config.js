module.exports = {
    'collectCoverage': true,
    'verbose': true,
    "transform": {
        "^.+\\.tsx?$": "esbuild-jest"
    },
    'testPathIgnorePatterns': [
        '/node_modules/',
        '/fixtures/',
        '/__modules__/',
        '/__files__/',
        '/lib/',
        '/dist/',
        '/es/',
    ]
};
