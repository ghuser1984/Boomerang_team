const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enemies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enemies.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    agility: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    vitality: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    weapon: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    points: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Enemies',
  });
  return Enemies;
};
