/*
 * ffxiv-lodestone
 * https://github.com/dannyrscott/ffxiv-lodestone
 *
 * Copyright (c) 2014 Danny Scott
 * Licensed under the MIT license.
 */
var Parser = require('./parser'),
	request = require('./request'),
	Promise = require('bluebird');

var Lodestone = function() {}

Lodestone.prototype.get = function(id, callback) {
	var thePromise = request.get(id)
	.then(function(body) {
		var parser = new Parser(body);

		return Promise.all([
			parser.getClasses(),
			parser.getMainAttributes(),
			parser.getOtherAttributes()
		]);
	})
	.spread(function(classes, main, other) {
		return {
			classes: classes,
			attributes: {
				main: main,
				other: other
			}
		};
	});

	return thePromise.nodeify(callback);

}

module.exports = Lodestone;