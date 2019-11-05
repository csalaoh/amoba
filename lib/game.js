const table = require('table');
const read = require('readline-sync');
const board = require('./board');
const check = require('./winCheck');
const color = require('colors');

/* const gameBoard = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
];
 */
let gameBoard = board.boardGenerator(20, 20);
const minY = 0;
const minX = 0;
const maxY = gameBoard.length - 1;
const maxX = gameBoard.length - 1;

let signXpoz = 0;
let signYpoz = 0;
const startX = 0;
const startY = 0;
let gameover = false;
console.clear();
const player1 = read.question('Első játékos neve: ');
const player2 = read.question('Második játékos neve: ');
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'o') {
    process.exit();
  }
  if (key === 'a') {
    if (gameBoard[signXpoz][signYpoz - 1] === ' ') {
      signYpoz--;
      if (signYpoz < minY) {
        signYpoz = minY;
      }

      if (currPayer === player1) {
        gameBoard[signXpoz][signYpoz] = 'X'.green;
      } else {
        gameBoard[signXpoz][signYpoz] = 'O'.red;
      }
      gameBoard[signXpoz][signYpoz + 1] = ' ';
    }

    game();
  }
  if (key === 'd') {
    if (signYpoz < maxY) {
      if (gameBoard[signXpoz][signYpoz + 1] === ' ') {
        signYpoz++;
        if (signYpoz > maxY) {
          signYpoz = maxY;
        }
        if (currPayer === player1) {
          gameBoard[signXpoz][signYpoz] = 'X'.green;
        } else {
          gameBoard[signXpoz][signYpoz] = 'O'.red;
        }
        gameBoard[signXpoz][signYpoz - 1] = ' ';
      }
    }
    game();
  }

  if (key === 's') {
    if (signXpoz < maxX) {
      if (gameBoard[signXpoz + 1][signYpoz] === ' ') {
        signXpoz++;
        if (signXpoz > maxX) {
          signXpoz = maxX;
        }
        if (currPayer === player1) {
          gameBoard[signXpoz][signYpoz] = 'X'.green;
        } else {
          gameBoard[signXpoz][signYpoz] = 'O'.red;
        }
        gameBoard[signXpoz - 1][signYpoz] = ' ';
      }
    }
    game();
  }

  if (key === 'w') {
    if (signXpoz > 0) {
      if (gameBoard[signXpoz - 1][signYpoz] === ' ') {
        signXpoz--;
        if (signXpoz < minX) {
          signXpoz = minX;
        }
        if (currPayer === player1) {
          gameBoard[signXpoz][signYpoz] = 'X'.green;
        } else {
          gameBoard[signXpoz][signYpoz] = 'O'.red;
        }
        gameBoard[signXpoz + 1][signYpoz] = ' ';
      }
      game();
    }
  }
  if (key === 'q') {
    if (signXpoz > minX && signYpoz > minX) {
      if (gameBoard[signXpoz - 1][signYpoz - 1] === ' ') {
        signXpoz--;
        signYpoz--;
        if (signXpoz < minX) {
          signXpoz = minX;
        }
        if (currPayer === player1) {
          gameBoard[signXpoz][signYpoz] = 'X'.green;
        } else {
          gameBoard[signXpoz][signYpoz] = 'O'.red;
        }
        gameBoard[signXpoz + 1][signYpoz + 1] = ' ';
      }
      game();
    }
  }
  if (key === 'e') {
    if (signXpoz > minX && signYpoz < maxY) {
      if (gameBoard[signXpoz - 1][signYpoz + 1] === ' ') {
        signXpoz--;
        signYpoz++;
        if (signXpoz < minX) {
          signXpoz = minX;
        }
        if (signYpoz > maxY) {
          signYpoz = maxY;
        }
        if (currPayer === player1) {
          gameBoard[signXpoz][signYpoz] = 'X'.green;
        } else {
          gameBoard[signXpoz][signYpoz] = 'O'.red;
        }
        gameBoard[signXpoz + 1][signYpoz - 1] = ' ';
      }
      game();
    }
  }
  if (key === 'X'.green) {
    if (signXpoz < maxX && signYpoz < maxY) {
      if (gameBoard[signXpoz + 1][signYpoz + 1] === ' ') {
        signXpoz++;
        signYpoz++;
        if (signXpoz > maxX) {
          signXpoz = minX;
        }
        if (signYpoz > maxY) {
          signYpoz = maxY;
        }
        if (currPayer === player1) {
          gameBoard[signXpoz][signYpoz] = 'X'.green;
        } else {
          gameBoard[signXpoz][signYpoz] = 'O'.red;
        }
        gameBoard[signXpoz - 1][signYpoz - 1] = ' ';
      }
      game();
    }
  }
  if (key === 'y') {
    if (signXpoz < maxX && signYpoz > minY) {
      if (gameBoard[signXpoz + 1][signYpoz - 1] === ' ') {
        signXpoz++;
        signYpoz--;
        if (signXpoz > maxX) {
          signXpoz = maxX;
        }
        if (signYpoz < minY) {
          signYpoz = minY;
        }
        if (currPayer === player1) {
          gameBoard[signXpoz][signYpoz] = 'X'.green;
        } else {
          gameBoard[signXpoz][signYpoz] = 'O'.red;
        }
        gameBoard[signXpoz - 1][signYpoz + 1] = ' ';
      }
      game();
    }
  }

  if (key === ' ') {
    let winplayer = currPayer;
    if (currPayer === player1) {
      gameBoard[signXpoz][signYpoz] = 'X'.green;
      currPayer = player2;
      winplayer = 'X'.green;
    } else {
      gameBoard[signXpoz][signYpoz] = 'O'.red;
      currPayer = player1;
      winplayer = 'O'.red;
    }

    if (check.winCheck(signXpoz, signYpoz, gameBoard, winplayer) === 5) {
      gameover = true;
      if (winplayer === 'X'.green) {
        console.log(`${player1} nyert!`);
      } else {
        console.log(`${player2} nyert!`);
      }

      console.log('Új játék => i   kilépés => o');
    } else {
      signXpoz = 0;
      signYpoz = 0;
      game();
    }
  }
  if (key === 'i' && gameover) {
    gameBoard = board.boardGenerator(20, 20);
    signXpoz = 0;
    signYpoz = 0;
    game();
  }
});

console.clear();
let currPayer = player1;
const game = () => {
  if (currPayer === player1) {
    gameBoard[startX][startY] = 'X'.green;
  } else {
    gameBoard[startX][startY] = 'O'.red;
  }
  console.clear();
  // console.log('jobbra => d  balra => a  fel => w  le => s');
  // console.log('balra + fel => q   jobbra fel => e   balra + le => y  jobbra + le => x');
  // console.log('kilépés => o');
  console.log(`${currPayer} lép:`);

  console.log(table.table(gameBoard));
};

game();
