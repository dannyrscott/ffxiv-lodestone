# ffxiv-lodestone [![Build Status](https://secure.travis-ci.org/dannyrscott/ffxiv-lodestone.png?branch=master)](http://travis-ci.org/dannyrscott/ffxiv-lodestone)

Get Character Data from the Final Fantasy XIV Lodestone

## Getting Started
Install the module with: `npm install ffxiv-lodestone`

```javascript
var Lodestone = require('ffxiv-lodestone');

lodestone = new Lodestone();

lodestone.get(YOURCHARIDHERE)
.then(function(characterData) {
	console.log(characterData);
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Danny Scott. Licensed under the MIT license.
