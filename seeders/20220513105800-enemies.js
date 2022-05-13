module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enemies', [{
      name: 'Bad_Boy',
      agility: 80,
      vitality: 100,
      weapon: 20,
      points: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Devil_Girl',
      agility: 60,
      vitality: 100,
      weapon: 10,
      points: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Weed_Hunter',
      agility: 90,
      vitality: 100,
      weapon: 40,
      points: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enemies', null, {});
  },
};

// isBetaMember: false,