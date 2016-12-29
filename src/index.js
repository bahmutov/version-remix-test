'use strict'

function add (a, b) {
  console.log(`adding ${a} to ${b}`)
  return a + b
}

function sub (a, b) {
  return a - b
}

module.exports = {add, sub}
