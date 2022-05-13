const Weapon = require('./Weapon');
// suriken class as additional weapon
class Shuriken extends Weapon {
  constructor() {
    super();
    this.skin = '#';
    this.position = 0;
  }
}

module.exports = Shuriken;
