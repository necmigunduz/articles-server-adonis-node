"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ArticlesSchema extends Schema {
  up() {
    this.create("articles", (table) => {
      table.increments();
      table.integer('user_id', 11).unsigned().references('id').inTable('users')
      table.string("title", 255).notNullable();
      table.string("description", 2500).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("articles");
  }
}

module.exports = ArticlesSchema;
