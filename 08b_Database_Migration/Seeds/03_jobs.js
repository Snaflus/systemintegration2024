/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("jobs").del();
  await knex("jobs").insert([
    { job_title: "Accountant", start_year: new Date(2021, 0, 1) },
    { job_title: "Bricklayer", start_year: new Date(2022, 0, 1) },
    { job_title: "Carpenter", start_year: new Date(2023, 0, 1) },
  ]);
};
