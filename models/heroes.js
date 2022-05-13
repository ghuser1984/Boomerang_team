const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Heroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Heroes.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    weapon: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    agility: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    dexterity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Heroes',
  });
  return Heroes;
};
