const { Model } = require("objection");
const roles = require("./roles.js");

class People extends Model {
  static get tableName() {
    return "people";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],

      properties: {
        id: { type: "number" },
        name: { type: "string" },
        birth_year: { type: "string", format: "date" },
      },
    };
  }
}

module.exports = People;
