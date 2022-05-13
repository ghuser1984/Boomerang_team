// Основной файл.
// Запускает игру.
const readlineSync = require('readline-sync');
const Game = require('./src/Game');
// const View = require('./src/View');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

// Запуск игры.
// const playerName = readlineSync.question('Please, enter your name: ');
// console.log(`Hello ${playerName}`);
game.play();
