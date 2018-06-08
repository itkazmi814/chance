const { Model } = require('objection');

class Charge extends Model {
  static get tableName() {
    return 'charges';
  }

  static get idColumn() {
    return 'id';
  }
}

module.exports = Charge;
