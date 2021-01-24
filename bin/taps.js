const shell = require('shelljs');
const fs = require('fs');
var taps = fs.readFileSync('./brew.tap.lock', 'utf8');
var tapList = '[';
taps = taps.replace(' ', '');
while (taps != '') {
	tapList = tapList + '\'' + taps.substring(0, taps.indexOf(' ') - 1) + '\'';
	taps.replace(taps.substring(0, taps.indexOf(' ') - 1), '');
	if (taps != '') {
		tapList = tapList + ', ';
	} else {
		tapList = tapList + ']';
	}
}
tapList = JSON.parse(tapList);
while (tapList != []) {
	shell.exec(`brew tap ${tapList[0]}`);
	tapList.shift();
}
