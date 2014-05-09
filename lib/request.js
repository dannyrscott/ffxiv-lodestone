var request = require('request'),
	Promise = require('bluebird');

var URL = 'http://na.finalfantasyxiv.com/lodestone/character/';
function getChar(id) {
	return new Promise(function(resolve, reject) {
		request.get({
			url: URL + id + '/'
		}, function(err, response, body) {
			if (err)
				return reject(err);
			resolve(body);
		});
	});
}

module.exports = {
	get: getChar
}