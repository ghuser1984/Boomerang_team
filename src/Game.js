// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

// const readlineSync = require('readline-sync');
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');
// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

// const weapon = new Boomerang();

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.weapon = new Boomerang();
    this.hero = new Hero({ weapon: this.weapon }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View({ game: this });
    this.track = [];
    this.regenerateTrack();
    // runInteractiveConsole();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.weapon.position] = this.weapon.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    } else if (this.enemy.position === this.weapon.position) {
      this.enemy.die();
    }
  }

  play() {
    runInteractiveConsole({ hero: this.hero });
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      // this.weapon.fly();
      this.enemy.moveLeft();
    }, 200);
  }
}

module.exports = Game;
