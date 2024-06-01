const { Model } = require("objection");
const roles = require("./roles.js");

class Jobs extends Model {
  static get tableName() {
    return "jobs";
  }

  static get idColumn() {
    return "job_title";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],

      properties: {
        job_title: { type: "string" },
        start_year: { type: "string", format: "date" },
      },
    };
  }
}

module.exports = Jobs;
