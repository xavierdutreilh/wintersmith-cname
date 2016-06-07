'use strict';

const fs = require('fs');
const path = require('path');

function read(filename) {
  return fs.readFileSync(filename, 'utf8');
}

exports.cname = {
  'build': (test) => {
    const actual = read(path.join(__dirname, '..', 'tmp', 'CNAME'));
    const expected = read(path.join(__dirname, 'expected', 'CNAME'));

    test.equal(actual, expected, 'should build the CNAME file');

    test.done();
  },
};
