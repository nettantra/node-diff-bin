var expect = require('expect.js');
var sh = require('execSync');
var grunt = require('grunt');

describe('node-diff', function() {
  it('should print correct patch output', function(done) {
    var result = sh.exec('node bin/node-diff.js test/fixtures/first.file test/fixtures/second.file');
    var resultPatch = result.stdout;
    var expectedPatch = grunt.file.read('test/expected/first-second.patch.out');
    expect(resultPatch).to.equal(expectedPatch);
    done();
  });
  it('should write correctly to the patch output file', function(done) {
    var result = sh.exec('node bin/node-diff.js test/fixtures/first.file test/fixtures/second.file tmp/first-second.patch');
    var resultPatch = grunt.file.read('tmp/first-second.patch');
    var expectedPatch = grunt.file.read('test/expected/first-second.patch');
    expect(resultPatch).to.equal(expectedPatch);
    done();
  });
});
