const path = require('path');

const ROOT = path.join(__dirname, '../');
const OPTIONS = {};

const buildDir = path.join(ROOT, 'build');
const srcDir = path.join(ROOT, 'src');
const srcClientScriptsDir = path.join(srcDir, 'assets/scripts/client');
const srcServerScriptsDir = path.join(srcDir, 'assets/scripts/server');

const FILE = {
    JS_CLIENT_ENTRY: path.join(srcClientScriptsDir, 'index.js')
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
