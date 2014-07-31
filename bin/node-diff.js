#!/usr/bin/env node


/**
 * Module dependencies
 */

var diff = require('diff');
var program = require('commander');
var grunt = require('grunt');
var fs = require('fs');
var path = require('path');

program
  .version('0.1.0')
  .option('-h, --help', 'Usage: jsdiff first.file second.file <optional-output.patch>')
  .parse(process.argv);

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ jsdiff first.file second.file <optional-output.patch>');
  console.log('');
  process.exit(0);
});


var first_file = (process.argv[2]) ? process.argv[2] : false;
var second_file = (process.argv[3]) ? process.argv[3] : false;
var output_patch_file = (process.argv[4]) ? process.argv[4] : false;

if (!first_file || !second_file) {
  grunt.log.error('Both first and second file parameters must be present to generate the patch!');
  process.exit(1);
}

if (!grunt.file.exists(first_file) || !grunt.file.exists(second_file)) {
  grunt.log.error('Both first and second file should exist on your filesystem must be present to generate the patch!');
  process.exit(1);
}

var firstFileStats = fs.statSync(first_file);
var secondFileStats = fs.statSync(second_file);

if (firstFileStats.isDirectory() || secondFileStats.isDirectory()) {
  grunt.log.error('Both first and second file should exist on your filesystem must be present and must not be directories to generate the patch!');
  process.exit(1);
}

var firstFileContent = grunt.file.read(first_file);
var secondFileContent = grunt.file.read(second_file);

var diffContent = diff.createPatch(path.basename(first_file), firstFileContent, secondFileContent);

if (output_patch_file) {
  grunt.file.write(output_patch_file, diffContent);
  grunt.log.writeln("Patch file saved successfully to '" + output_patch_file + "'");
} else {
  grunt.log.writeln(diffContent);
}
process.exit(0);
