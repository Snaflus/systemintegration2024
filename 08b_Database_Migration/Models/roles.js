const { Model } = require("objection");

class Roles extends Model {
  static get tableName() {
    return "roles";
  }

  static get idColumn() {
    return "person_id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],

      properties: {
        person_id: { type: "number" },
        job_title: { type: "string" },
      },
    };
  }
  static get relationMappings() {
    return {
      people: {
        relation: Model.ManyToManyRelation,
        modelClass: Roles,
        join: {
          from: "roles.person_id",
          to: "people.id",
        },
      },
      jobs: {
        relation: Model.ManyToManyRelation,
        modelClass: Roles,
        join: {
          from: "roles.job_title",
          to: "jobs.job_title",
        },
      },
    };
  }
}

module.exports = Roles;
