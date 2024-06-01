/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("people").del();
  await knex("people").insert([
    { id: 1, name: "Alice", birth_year: new Date(2021, 0, 1) },
    { id: 2, name: "Bob", birth_year: new Date(2022, 0, 1) },
    { id: 3, name: "Charlie", birth_year: new Date(2023, 0, 1) },
  ]);
};
