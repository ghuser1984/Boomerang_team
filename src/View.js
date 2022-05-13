// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor({ game }) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'Konami';

    // Тут всё рисуем.

    console.clear();
    console.log(`Created by "${yourTeamName}"`);
    console.log('\n\n');
    console.log(this.game.track.join(''));
    console.log('\n\n');
  }
}

module.exports = View;
