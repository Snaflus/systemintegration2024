/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("people", (table) => {
      table.integer("id").notNullable().primary();
      table.string("name").notNullable();
      table.date("birth_year").notNullable();
    })

    .createTable("jobs", (table) => {
      table.string("job_title").notNullable().primary();
      table.date("start_year").notNullable();
    })

    .createTable("roles", (table) => {
      table.integer("person_id").notNullable().index();
      table.foreign("person_id").references("id").inTable("people");

      table.string("job_title").notNullable();
      table.foreign("job_title").references("job_title").inTable("jobs");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("roles").dropTable("jobs").dropTable("people");
};
