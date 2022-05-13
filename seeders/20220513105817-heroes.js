module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Heroes', [{
      name: 'Super_Donat',
      weapon: 10,
      agility: 20,
      dexterity: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
      // isBetaMember: false,
    }, {
      name: 'Big_Mama',
      weapon: 50,
      agility: 80,
      dexterity: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Pikachu',
      weapon: 40,
      agility: 10,
      dexterity: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Super_Girl',
      weapon: 5,
      agility: 20,
      dexterity: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Heroes', null, {});
  },
};
