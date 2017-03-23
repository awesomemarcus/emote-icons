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

describe("emote-icons emoticons", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  it("should check text", function() {
    var output = emotes('hi');

    expect(output).to.equal('hi');
  });

  it("should parse if emoticons match", function() {
    var output = emotes(':)');

    expect(output).to.equal('<span class="sprite sprite-smile"></span>');
  });

  it("should check both", function() {
    var output = emotes('hello :)');

    expect(output).to.equal('hello <span class="sprite sprite-smile"></span>');
  });
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
