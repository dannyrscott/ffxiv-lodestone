var cheerio = require('cheerio');

var Parser = function(html) {
	this.$ = cheerio.load(html);
};

Parser.prototype.getClasses = function() {
	var classes = {},
		_self = this;
	_self.$('td.ic_class_wh24_box').each(function(c) {
		var $this = _self.$(this),
			className = $this.text();
		if (className.length) {
			classes[className] = $this.next().text();
		}
	});

	 return classes;
};

Parser.prototype.getMainAttributes = function() {
	var attrs = {},
		_self = this;

	_self.$('.param_list_attributes li').each(function() {
	 	var $this = _self.$(this);
	 	attrs[$this.attr("class")] = $this.text();
	 });

	return attrs;
}

Parser.prototype.getOtherAttributes = function() {
	var attrs = {},
		_self = this;

	_self.$('.param_list li').each(function() {
		var $this = _self.$(this);
		attrs[$this.children('span.left').text()] = $this.children('span.right').text()
	});

	return attrs;
}
module.exports = Parser;