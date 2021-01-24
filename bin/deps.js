#!/usr/bin/node
const shell = require('shelljs');
var deps = fs.readFileSync('./brew.lock', 'utf8');
if (deps != '' && deps != ' ') {
	deps = deps.replace(' ', '');
	shell.exec('brew install ' + deps);
}
