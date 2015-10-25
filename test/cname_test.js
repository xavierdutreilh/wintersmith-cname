'use strict';

var fs = require('fs');

function read(filename) {
  return fs.readFileSync(filename, {'encoding': 'utf8'});
}

exports.cname = {
  'build': function(test) {
    var actual = read('tmp/CNAME');
    var expected = read('test/expected/CNAME');

    test.equal(actual, expected, 'should build the CNAME file');

    test.done();
  },
};
