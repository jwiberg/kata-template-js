# kata-template-js
Template for code katas written in JavaScript. 

## How to use this?


### Basic commands (feel free to add your owns)
    "scripts": {
		"test": "eslint *.js --fix && ava",
		"format": "eslint *.js --fix",
		"watch": "ava --watch"
	},

* npm test
  * run tests
* npm run format
  * format and check code with eslint
* npm run watch 
  * run ava test runner in watch mode (auto "compile" and automatic test runs)