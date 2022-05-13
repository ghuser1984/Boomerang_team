const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Results.init({
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
    modelName: 'Results',
  });
  return Results;
};
