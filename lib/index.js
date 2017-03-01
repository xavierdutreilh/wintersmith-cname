const url = require('url')

function index (env, callback) {
  class CNAME extends env.plugins.Page {
    getFilename () {
      return 'CNAME'
    }

    getView () {
      return (env, locals, contents, templates, callback) => {
        if (!locals.url) {
          return callback(new Error('locals.url must be defined.'))
        }

        callback(null, new Buffer(url.parse(locals.url).host))
      }
    }
  }

  env.registerGenerator('cname', (contents, callback) => {
    callback(null, {'CNAME': new CNAME()})
  })

  callback()
}

module.exports = index
