// Наш герой.

class Hero {
  constructor({ position, weapon }) {
    this.skin = '💃'; // можете использовать любые emoji '💃'
    this.weapon = weapon;
    this.position = 0;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.weapon.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
