'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeroLeroSchema extends Schema {
  up() {
    this.create('lero_leros', (table) => {
      table.increments()
      table.string('author')
      table.string('text')
      table.timestamps()
    })
  }

  down() {
    this.drop('lero_leros')
  }
}

module.exports = LeroLeroSchema
