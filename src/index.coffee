url = require 'url'

module.exports = (env, callback) ->

  class Cname extends env.plugins.Page

    getFilename: ->
      'CNAME'

    getView: -> (env, locals, contents, templates, callback) ->
      if locals.url?
        callback null, new Buffer url.parse(locals.url).host or ''
      else
        callback()

  env.registerGenerator 'cname', (contents, callback) ->
    tree =
      'CNAME': new Cname
    callback null, tree

  callback()
