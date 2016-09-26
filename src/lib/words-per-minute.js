module.exports = {
  getMinutesFromText: getMinutesFromText
}

function getMinutesFromText (text) {
  //https://en.wikipedia.org/wiki/Words_per_minute
  const wpm = 213
  return getMinutesPerWords(wpm, text)
}

function getMinutesPerWords (wpm, text) {
  return Math.floor(getWords(text) / wpm) || 1
}

function getWords (text) {
  const noWordChars = /[^aábcdeéfghijklmnñoópqrstuúüvwxyzAÁBCDEÉFGHIJKLMNÑOÓPQRSTUÚÜ‌​VWXYZ0-9]/g
  return text.split(noWordChars).length
}
