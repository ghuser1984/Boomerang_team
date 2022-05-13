module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heroes', {
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
    await queryInterface.dropTable('Heroes');
  },
};
