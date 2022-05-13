// Ninja class
const Hero = require('./Hero');

class Ninja extends Hero {
  constructor({ position }) {
    super();
    this.skin = '🥷🏻';
    this.position = position;
  }
}

module.exports = Ninja;
