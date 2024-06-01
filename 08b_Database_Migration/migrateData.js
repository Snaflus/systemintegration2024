const configOld =
  require("./knexfile.js")[process.env.NODE_ENV || "development"];
const knexOld = require("knex")(configOld);

const configNew = configOld;
configNew.connection.port = 3307;

const knexNew = require("knex")(configNew);

function createDatabase() {
  return knexNew
    .raw("DROP DATABASE IF EXISTS master")
    .catch((err) => {
      console.log("Failed to drop database: ", err.message);
    })
    .then(() => {
      return knexNew.raw("CREATE DATABASE master");
    })
    .then(() => {
      console.log("Database created successfully");
      return knexNew.raw("USE master");
    })
    .then(() => {
      console.log("Database selected successfully");
      // Update the connection to use the new database
      knexNew.client.connectionSettings.database = "master";
      // Run migrations
      return knexNew.migrate.latest();
    });
}

async function migrateTableData(tableName) {
  const rows = await knexOld.select("*").from(tableName);
  for (const row of rows) {
    await knexNew.table(tableName).insert(row);
  }
}

async function migrateData() {
  try {
    await migrateTableData("products");
    await migrateTableData("people");
    await migrateTableData("jobs");
    await migrateTableData("roles");
    console.log("Data migration completed successfully");
  } catch (error) {
    console.error("An error occurred during data migration", error);
  } finally {
    knexOld.destroy();
    knexNew.destroy();
  }
}

createDatabase().then(migrateData);
