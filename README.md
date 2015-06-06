# wintersmith-cname [![Build Status](https://travis-ci.org/xavierdutreilh/wintersmith-cname.svg?branch=master)](https://travis-ci.org/xavierdutreilh/wintersmith-cname)

A [Wintersmith](https://github.com/jnordberg/wintersmith) plugin to generate a CNAME file

## Installing

Install globally or locally using npm

```
npm install [-g] wintersmith-cname
```

and add `wintersmith-cname` to your config.json

```json
{
  "plugins": [
    "wintersmith-cname"
  ]
}
```

and define the `url` property in the `locals` section

```json
{
  "locals": {
    "url": "http://example.com"
  }
}
```

## Running tests

```
npm install
npm test
```
