#!/usr/bin/node
var fs = require('fs');
var tap = fs.readFileSync('./brew.tap.lock', 'utf8');
tap = tap.replace(process.argv[3] + '\n', '');
fs.writeFile('./brew.tap.lock', tap, (err) => {
	if (err) throw err;
});
