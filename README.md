# emote-icons
scans and replace string that match a emoticon

[![Build Status](https://travis-ci.org/maddumajohnerick/cheers-alert.svg?branch=master)](https://travis-ci.org/maddumajohnerick/cheers-alert)
[![Coverage Status](https://coveralls.io/repos/github/maddumajohnerick/cheers-alert/badge.svg?branch=master)](https://coveralls.io/github/maddumajohnerick/cheers-alert?branch=master)
[![Code Climate](https://lima.codeclimate.com/github/maddumajohnerick/cheers-alert/badges/gpa.svg)](https://lima.codeclimate.com/github/maddumajohnerick/cheers-alert)

[Demo Page](https://maddumajohnerick.github.io/emote-icons/examples/)

### Install
#### NPM
```js
$ npm install emote-icons --save
```

### Usage
#### Import
```js
import emotes from 'emote-icons';
import 'emote-icons/src/emote-icons.css'; //load style
```
for smaller emoticons import "emote-icons-sm.css" instead.
#### HTML
```html
<html>
    <head>
        <meta charset="utf-8">
        <title>Emoticons Test</title>
    </head>
    <body>
        <div id="myContainer">
            Hello :)
        </div>

        <script>
            var content = $('#myContainer').html();
            $('#myContainer').html(emotes(content));
        </script>
    </body>
</html>
```
#### React
```js
import React from 'react';
import emotes from 'emote-icons';
import 'emote-icons/src/emote-icons.css';

class Emoticon extends React.Component {
    function generateEmoticon(htmlString) {
        return {__html: emotes(htmlString)};
    }

    function myEmoticon() {
        return <div dangerouslySetInnerHTML={generateEmoticon(htmlString)} />;
    }

    render() {
        const html = emotes('html string goes here');
        return <div>{ myEmoticon(htmlString) }</div>;
    }
}
```
you can also user "react-html-parser" if you don't want to use "dangerouslySetInnerHTML".
```js
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import emotes from 'emote-icons';
import 'emote-icons/src/emote-icons.css';

class Emoticon extends React.Component {
  render() {
    const html = emotes('html string goes here');
    return <div>{ ReactHtmlParser(html) }</div>;
  }
}
```
