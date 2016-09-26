# words-per-minute - reading time
Words per minute is a common metric for assessing reading speed. Calculate it with JS

### Install

`$ npm install words-per-minute --save`

### Usage
```javascript
const getMinutesFromText = require('words-per-minute').getMinutesFromText
const getWordsPerMinutes = require('words-per-minute').getWordsPerMinutes

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
getMinutesFromText(text) // 1

getWordsPerMinutes(3) // 639

```

Tested with utf-8 and Spanish characters.
