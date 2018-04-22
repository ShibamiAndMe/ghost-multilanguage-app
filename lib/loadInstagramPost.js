const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');
const path = require('path');

const adapter = new FileSync('../../data/instagramData.json');
const db = low(adapter);

const instagramDB = db.get('posts');
const dbSize = instagramDB.size().value();

const emptyObj = {
	id: dbSize + 1,
	date: new Date(),
	html: fs.readFileSync(path.join(__dirname, '../../../data/embeddedInstagram.html'), 'utf8')
};

result = instagramDB.push(emptyObj).write();

console.log(result);