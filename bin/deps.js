#!/usr/bin/node
const fs = require('fs');
const shell = require('shelljs');
var taps = fs.readFileSync('brew.tap.lock', 'utf8').split(' ');
taps.pop();
taps.join(' ');
shell.exec('brew tap ' + taps);
var pkgs = fs.readFileSync('brew.lock', 'utf8').split(' ');
pkgs.pop();
pkgs.join(' ');
shell.exec('brew install ' + pkgs);
