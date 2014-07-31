var expect = require('expect.js'),
    diffBin = require('..');

describe('node-diff-bin', function() {
  it('should say hello', function(done) {
    expect(diffBin()).to.equal('Hello, world');
    done();
  });
});
