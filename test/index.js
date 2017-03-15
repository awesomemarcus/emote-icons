var expect = require("chai").expect;
var emotes = require('../src/emote-icons.js');

var jsdom = require('jsdom').jsdom;
var document = jsdom('<div/');
var window = document.defaultView;
var $ = jQuery = require('jquery')(window);

function check( done, f ) {
  try {
    f();
    done();
  } catch( e ) {
    done( e );
  }
};

describe("cheers-alert notification", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  // it("should check if alert-container exist", function() {
  //   expect($('.alert-container').length).to.equal(0);
  // });
  //
  // it("create alert-container if none exist", function() {
  //   cheers.success({
  //     title: 'Warning',
  //     message: 'Validation error',
  //     alert: 'slideleft',
  //     icon: 'fa-user',
  //   });
  //
  //   expect($('.alert-container').length).to.equal(1);
  //   expect($('body').html()).to.contain('alert-container');
  // });
  //
  // it("should create success notification", function() {
  //   cheers.success({
  //     title: 'Warning',
  //     message: 'Validation error',
  //     alert: 'slideleft',
  //     icon: 'fa-user',
  //   });
  //
  //   expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft success');
  // });
});
