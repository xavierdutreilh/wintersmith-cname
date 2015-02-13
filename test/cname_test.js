'use strict';

var grunt = require('grunt');

exports.cname = {
  build: function(test) {
    var actual = grunt.file.read('tmp/build/CNAME');
    var expected = grunt.file.read('test/expected/CNAME');

    test.equal(actual, expected, 'should build the CNAME file');

    test.done();
  },
};
