#!/usr/bin/node
const fs = require("fs");
var lock = fs.readFileSync("./brew.lock", "utf8");
var arg = process.argv[3] + '\n';
lock = lock.replace(arg, '');
fs.writeFile("./brew.lock", lock, (err) => {
	if (err) throw err;
});
