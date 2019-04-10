const fs = require('fs');
const path = require('path');

let pages = [];
function getPath(files) {
	console.log('GETPATH')
	for (const file of files) {

		console.log('file', file)

		if (fs.statSync(file).isDirectory()) {

			console.log('OIOIOIOIOI')

			getPath(fs.readdirSync(file).map(function (f) {return path.join(file, f);}));
		} else {
			console.log('push')
			pages.push(file);
		}
	}
};

getPath(fs.readdirSync('./src/pages').map(function (f) {return path.join('./src/pages/', f);}));
process.env.VUE_APP_PAGES = pages;

console.log('aerq', process.env.VUE_APP_PAGES)

process.env.VUE_APP_ASSETS_DIR = 'assets';


module.exports = {
	assetsDir: process.env.VUE_APP_ASSETS_DIR,
};
