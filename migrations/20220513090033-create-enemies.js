const { DataTypes } = require('sequelize/types');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enemies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enemies');
  },
};
