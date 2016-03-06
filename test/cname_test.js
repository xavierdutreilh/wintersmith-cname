'use strict';

const fs = require('fs');

function read(filename) {
  return fs.readFileSync(filename, {'encoding': 'utf8'});
}

exports.cname = {
  'build': function(test) {
    const actual = read('tmp/CNAME');
    const expected = read('test/expected/CNAME');

    test.equal(actual, expected, 'should build the CNAME file');

    test.done();
  },
};
