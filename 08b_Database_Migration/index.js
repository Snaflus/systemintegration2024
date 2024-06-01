const { Model } = require("objection");
const config = require("./knexfile.js")[process.env.NODE_ENV || "development"];
const knex = require("knex")(config);

Model.knex(knex);

const People = require("./Models/people.js");
const Jobs = require("./Models/jobs.js");
const Products = require("./Models/products.js");
const Roles = require("./Models/roles.js");

People.query()
  .max("id")
  .first()
  .then((max) => {
    const highestId = max["max(`id`)"];
    const peopleToCreate = {
      id: highestId + 1,
      name: "Drake",
      birth_year: new Date(2024, 0, 1).toISOString().split("T")[0],
    };
    People.query()
      .insert(peopleToCreate)
      .then((people) => {
        People.query().findById(people.id).then(console.log);
      });

    const jobToCreate = {
      job_title: "Developer",
      start_year: new Date(2024, 0, 1).toISOString().split("T")[0],
    };
    Jobs.query()
      .insert(jobToCreate)
      .then((job) => {
        Jobs.query().findById(job.job_title).then(console.log);
      });

    const roleToCreate = {
      person_id: peopleToCreate.id,
      job_title: jobToCreate.job_title,
    };
    Roles.query()
      .insert(roleToCreate)
      .then((role) => {
        Roles.query().findById(role.person_id).then(console.log);
      });
  });
