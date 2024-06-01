/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("roles").del();
  await knex("roles").insert([
    { person_id: 1, job_title: "Accountant" },
    { person_id: 2, job_title: "Bricklayer" },
    { person_id: 3, job_title: "Carpenter" },
  ]);
};
