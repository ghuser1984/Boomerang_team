// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
const Hero = require('./game-models/Hero');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  w: () => console.log('moving hero up'),
  a: () => console.log('moving hero left'),
  s: () => console.log('moving hero down'),
  d: () => console.log('moving hero right'),
};

// Какая-то функция.

function runInteractiveConsole() {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
}

// Давай попробуем запустить этот скрипт!

runInteractiveConsole();
