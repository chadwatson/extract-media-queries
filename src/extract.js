'use strict';

var parse = require('css-parse');
var stringify = require('css-stringify');
var fs = require('fs');

/**
 * @param string inputFileName : path of the input file
 * @param string outputFileName : path of the main input file
 * @param array breakpoints : array of strings : breakpoints & filenames
 */
function extractor(inputFileName) {
  // Read css input file
  var css = fs.readFileSync(inputFileName, {
    encoding: "utf8"
  });

  var tree = parse(css);

  writeFromRules(tree.stylesheet.rules.filter(function(rule) {
    return rule.type === 'media';
  }));
}

function writeFromRules(rules) {
  // Compose the css tree to be stringified
  var tree = {
    type: "stylesheet",
    stylesheet: {
      rules: rules
    }
  };

  return process.stdout.write(stringify(tree));
}


module.exports = extractor;
