var expect = require('chai').expect;

describe('test suite', function() {
  it('should be a string', function() {
    var string = `abc`
    expect(string).to.be.a('string');
  });
});

