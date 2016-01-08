#!/usr/bin/env node

var program = require('commander');
var extract = require('../src/extract');
var pkg = require('../package.json');

var _input = '';

program
  .version(pkg.version)
  .description(pkg.description)
  .arguments('<input>')
  .action(function(input) {
    _input = input;
  });

program.parse(process.argv);

if (!_input) {
  console.log('You must declare a path to an input file.');
  process.exit(1);
}

extract(_input);