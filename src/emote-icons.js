'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var emotes = (function () {
  var emoticons = {
    ':aha': 'sprite sprite-aha',
    ':angel': 'sprite sprite-angel',
    'O:)': 'sprite sprite-angel',
    '0:)': 'sprite sprite-angel',
    ':angry': 'sprite sprite-angry',
    ':balloon': 'sprite sprite-balloon',
    ':bomb': 'sprite sprite-bomb',
    ':boo': 'sprite sprite-boo',
    ':broken': 'sprite sprite-broken',
    '</3': 'sprite sprite-broken',
    ':bye': 'sprite sprite-bye',
    ':cake': 'sprite sprite-cake',
    ':cat': 'sprite sprite-cat',
    ':clock': 'sprite sprite-clock',
    ':clown': 'sprite sprite-clown',
    ':cold': 'sprite sprite-cold',
    ':confused': 'sprite sprite-confused',
    ':cool': 'sprite sprite-cool',
    ':cry': 'sprite sprite-cry',
    ":'(": 'sprite sprite-cry',
    ':cry2': 'sprite sprite-cry2',
    ":''(": 'sprite sprite-cry2',
    ':dead': 'sprite sprite-dead',
    ':devil': 'sprite sprite-devil',
    '3:)': 'sprite sprite-devil',
    ':dizzy': 'sprite sprite-dizzy',
    ':dog': 'sprite sprite-dog',
    ':drink': 'sprite sprite-drink',
    ':drool': 'sprite sprite-drool',
    ':gift': 'sprite sprite-gift',
    ':girl': 'sprite sprite-girl',
    ':grin': 'sprite sprite-grin',
    ':D': 'sprite sprite-grin',
    ':heart': 'sprite sprite-heart',
    '<3': 'sprite sprite-heart',
    ':hug': 'sprite sprite-hug',
    ':kiss': 'sprite sprite-kiss',
    ':*': 'sprite sprite-kiss',
    'XD': 'sprite sprite-lol',
    ':loser': 'sprite sprite-loser',
    ':love': 'sprite sprite-love',
    ':**': 'sprite sprite-love',
    ':mail': 'sprite sprite-mail',
    ':mute': 'sprite sprite-mute',
    ':nerd': 'sprite sprite-nerd',
    '8)': 'sprite sprite-nerd',
    ':night': 'sprite sprite-night',
    ':ninja': 'sprite sprite-ninja',
    ':party': 'sprite sprite-party',
    ':phone': 'sprite sprite-phone',
    ':pig': 'sprite sprite-pig',
    ':poker': 'sprite sprite-poker',
    ':poo': 'sprite sprite-poo',
    ':rain': 'sprite sprite-rain',
    ':rainbow': 'sprite sprite-rainbow',
    ':rose': 'sprite sprite-rose',
    '@}~': 'sprite sprite-rose',
    ':sad': 'sprite sprite-sad',
    ':(': 'sprite sprite-sad',
    ':scared': 'sprite sprite-scared',
    ':sick': 'sprite sprite-sick',
    ':sick2': 'sprite sprite-sick2',
    ':silly': 'sprite sprite-silly',
    ':sleep': 'sprite sprite-sleep',
    ':sleep2': 'sprite sprite-sleep2',
    ':sleepy': 'sprite sprite-sleepy',
    ':sleepy2': 'sprite sprite-sleepy2',
    ':smile': 'sprite sprite-smile',
    ':)': 'sprite sprite-smile',
    ':smoke': 'sprite sprite-smoke',
    ':smug': 'sprite sprite-smug',
    'B)': 'sprite sprite-smug',
    ':sshh': 'sprite sprite-sshh',
    ':star': 'sprite sprite-star',
    ':sweat': 'sprite sprite-sweat',
    ':think': 'sprite sprite-think',
    ':bleh': 'sprite sprite-bleh',
    ':P': 'sprite sprite-bleh',
    ':music': 'sprite sprite-music',
    ':vomit': 'sprite sprite-vomit',
    ':wew': 'sprite sprite-wew',
    ':win': 'sprite sprite-win',
    ':wink': 'sprite sprite-wink',
    ';)': 'sprite sprite-wink',
    ':yawn': 'sprite sprite-yawn',
    ':yawn2': 'sprite sprite-yawn2',
    ':zombie': 'sprite sprite-zombie'
  }

  function parseHTML(string) {
    var parts = string.split(' ');
    var newString = '';

    for (var i = 0; i < parts.length; i++) {
      var newPart = parts[i];

      if (emoticons[parts[i]]) {
        newPart = emoticons[newPart];
        parts[i] = '<span class="' + newPart + '"></span>';
      }
    }
    newString = parts.join(' ');
    // console.log(newString);
    return newString;
  }

  return parseHTML;
}());

module.exports = emotes;
