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

  describe('sub', () => {
    const {sub} = require('.')

    it('is a function', () => {
      console.assert(typeof sub === 'function')
    })

    it('subtracts two numbers', () => {
      console.assert(sub(2, 3) === -1)
    })
  })
})
