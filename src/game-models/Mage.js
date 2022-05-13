// Mage class
const Hero = require('./Hero');
// const Fireball = require('./Fireball');

class Mage extends Hero {
  constructor({ position, weapon }) {
    super();
    this.skin = '🧙🏼‍♂️';
    this.position = position;
    this.weapon = weapon;
  }
}

module.exports = Mage;
