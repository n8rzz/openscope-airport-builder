const path = require('path');

const ROOT = path.join(__dirname, '../');
const OPTIONS = {};

const buildDir = path.join(ROOT, 'build');
const srcDir = path.join(ROOT, 'src');
const srcStyleDir = path.join(srcDir, 'assets/style');
const srcClientScriptsDir = path.join(srcDir, 'assets/script/client');

const FILE = {
    LESS_ENTRY: path.join(srcStyleDir, 'main.less'),
    JS_CLIENT_ENTRY: path.join(srcClientScriptsDir, 'index.js')
};

const DIR = {
    BUILD: buildDir,
    BUILD_STYLES: path.join(buildDir, 'assets/style'),
    BUILD_JS: path.join(buildDir, 'assets/script'),
    SRC: srcDir
};

const GLOB = {
    LESS: path.join(srcStyleDir, '**/*.less')
};

OPTIONS.ROOT = ROOT;
OPTIONS.FILE = FILE;
OPTIONS.DIR = DIR;
OPTIONS.GLOB = GLOB;

module.exports = OPTIONS;
