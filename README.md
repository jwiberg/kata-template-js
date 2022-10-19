# kata-template-js
Template for code katas written in JavaScript. 

## How to use this?

* Install https://nodejs.org/en/ (LTS/Current if possible, >=18.0.0 is required)
* run "npx degit https://github.com/jwiberg/kata-template-js.git" 
  * If that doesn't work clone or fork this repository
* Run "npm install"
* Start coding (check source code for examples and commands below)

### Basic commands (feel free to add your own)
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

## AVA test runner documentation
* https://github.com/avajs/ava
