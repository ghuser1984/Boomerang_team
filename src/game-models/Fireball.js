const Weapon = require('./Weapon');

class Fireball extends Weapon {
  constructor() {
    super();
    this.skin = '🔥';
    this.position = 0;
  }
}

module.exports = Fireball;
