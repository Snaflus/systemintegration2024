/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    { id: 1, price: "100kr", name: "Avocado" },
    { id: 2, price: "200kr", name: "Banana" },
    { id: 3, price: "300kr", name: "Coconut" },
  ]);
};
