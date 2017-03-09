const fs = require('fs')

function read (filename) {
  return fs.readFileSync(filename, 'utf8')
}

exports.cname = {
  build(test) {
    const actual = read(`${__dirname}/../tmp/CNAME`)
    const expected = read(`${__dirname}/expected/CNAME`)

    test.equal(actual, expected, 'should build the CNAME file')

    test.done()
  }
}
