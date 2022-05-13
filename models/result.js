const {
  Model,
} = require('sequelize');
// const { FOREIGNKEYS } = require('sequelize/types/lib/query-types');

module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Result.User = User.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Result.init({
    score: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userid: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};
