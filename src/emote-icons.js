'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var emotes = (function () {
  function parse(string) {
    console.log(string);
  }

  function list() {
    console.log('listing');
  }

  var emoticons = {
    parse: parse,
    list: list
  };

  return emoticons;
}());

module.exports = emotes;
