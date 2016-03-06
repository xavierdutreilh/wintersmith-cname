'use strict';

var url = require('url');

module.exports = function(env, callback) {
  class CNAME extends env.plugins.Page {
    getFilename() {
      return 'CNAME';
    }

    getView() {
      return (env, locals, contents, templates, callback) => {
        if (locals.url) {
          callback(null, new Buffer(url.parse(locals.url).host));
        } else {
          callback();
        }
      };
    }
  }

  env.registerGenerator('cname', (contents, callback) => {
    callback(null, {'CNAME': new CNAME()});
  });

  callback();
};
