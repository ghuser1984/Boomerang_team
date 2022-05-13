// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 30;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = 30;
    console.log('Enemy is dead!');
    this.skin = '';
    process.exit();
  }
}

module.exports = Enemy;
