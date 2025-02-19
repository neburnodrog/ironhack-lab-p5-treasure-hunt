function getRandomNumber() {
  let number = 0;
  while (number === 0) {
    number = Math.floor(9 * Math.random());
  }

  return number;
}


class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(getRandomNumber(), getRandomNumber());
  }

  drawGrid() {
    fill(100, 100, 0);

    for (let x = 0; x < WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y < HEIGHT; y += SQUARE_SIDE) {
        rect(x, y, SQUARE_SIDE, SQUARE_SIDE);
      }

    }
  }

  preload = () => {
    this.player.image = loadImage("../assets/character-down.png");
    this.treasure.image = loadImage("../assets/treasure.png");
  }
}

class GameElement {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
  }

  draw = () => image(
    this.image,
    this.col * SQUARE_SIDE,
    this.row * SQUARE_SIDE,
    SQUARE_SIDE,
    SQUARE_SIDE
  )
}


class Player extends GameElement {
  constructor(col, row) {
    super(col, row);
  }

  moveUp = () => this.row > 0 ? this.row-- : this.row = 9;
  moveDown = () => this.row < 9 ? this.row++ : this.row = 0;
  moveLeft = () => this.col > 0 ? this.col-- : this.col = 9;
  moveRight = () => this.col < 9 ? this.col++ : this.col = 0;
}


class Treasure extends GameElement {
  constructor(col, row) {
    super(col, row);
  }
}

