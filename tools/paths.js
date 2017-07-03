const path = require('path');

const ROOT = path.join(__dirname, '../');
const OPTIONS = {};

const buildDir = path.join(ROOT, 'build');
const srcDir = path.join(ROOT, 'src');

const FILE = {
    JS_ENTRY: path.join(srcDir, 'assets/scripts/index.js')
};

const DIR = {
    BUILD: buildDir,
    BUILD_JS: path.join(buildDir, 'assets/scripts'),
    SRC: srcDir
};

OPTIONS.ROOT = ROOT;
OPTIONS.FILE = FILE;
OPTIONS.DIR = DIR;

module.exports = OPTIONS;
