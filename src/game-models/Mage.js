// Mage class
const Hero = require('./Hero');

class Mage extends Hero {
  constructor({ position }) {
    super();
    this.skin = '🧙🏼‍♂️';
    this.position = position;
  }
}

module.exports = Mage;
