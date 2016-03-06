# wintersmith-cname [![Build Status](https://travis-ci.org/xavierdutreilh/wintersmith-cname.svg?branch=master)](https://travis-ci.org/xavierdutreilh/wintersmith-cname)

> A [Wintersmith](https://github.com/jnordberg/wintersmith) plugin to generate a CNAME file

## Installation

Install globally or locally using npm:

```bash
npm install [-g] wintersmith-cname
```

Add `wintersmith-cname` to your `config.json`:

```json
{
  "plugins": [
    "wintersmith-cname"
  ]
}
```

Define the `url` property in the `locals` property:

```json
{
  "locals": {
    "url": "http://example.com"
  }
}
```

## License

`wintersmith-cname` is released under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).
