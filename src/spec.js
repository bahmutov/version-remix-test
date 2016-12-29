'use strict'

/* global describe, it */
describe('version-remix-test arithmetic', () => {
  describe('add', () => {
    const {add} = require('.')

    it('is a function', () => {
      console.assert(typeof add === 'function')
    })

    it('adds two numbers', () => {
      console.assert(add(2, 3) === 5)
    })
  })
})
