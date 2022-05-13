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
        type: Sequelize.TEXT,
      },
      agility: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      vitality: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      weapon: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      points: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
