const crypto  = require('crypto');
const path = require('path');
const fs = require('fs');

const encrypt = (pub, text = null) => {
	const abs = path.resolve(pub);
	const key = fs.readFileSync(abs, 'utf8');
	let buffer;
	if(text === null) {
		buffer = fs.readFileSync(0);
	} else {
		buffer = Buffer.from(text);
	}

	return crypto.publicEncrypt(key, buffer);
}

const decrypt = (priv, text = null) => {
	const abs = path.resolve(priv)
	const key = fs.readFileSync(abs, 'utf8');
	let buffer;
	if(text === null) {
		buffer = Buffer.from(fs.readFileSync(0, 'utf8'), 'base64');
	} else {
		buffer = Buffer.from(text, 'base64');
	}

	return crypto.privateDecrypt({
		key,
        passphrase: '',
	}, buffer);
}

const help = () => {
	console.log('Usage: main.js encrypt text public')
}

function main() {
	switch(process.argv[2]) {
		case "encrypt":
			console.log(encrypt(process.argv[3], process.argv[4]).toString('base64'));
			break;
		case "decrypt":
			console.log(decrypt(process.argv[3], process.argv[4] || null).toString("utf8"));
			break;
		default:
			help();
	}
}	

main();
