const { Model } = require("objection");

class Products extends Model {
  static get tableName() {
    return "products";
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
        price: { type: "string" },
        name: { type: "string" },
      },
    };
  }
}

module.exports = Products;
