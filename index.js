'use strict'

let isFirstClear = true

module.exports = function () {
  // On first run, clear completely so it doesn't show half screen on Windows.
  // On next runs, use a different sequence that properly scrolls back.
  process.stdout.write(isFirstClear ? '\x1bc' : '\x1b[2J\x1b[0f')
  isFirstClear = false
}
