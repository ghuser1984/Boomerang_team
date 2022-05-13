// General Weapon class

class Weapon {
  constructor() {
    this.skin = '';
    this.position = 0;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }
}

module.exports = Weapon;
