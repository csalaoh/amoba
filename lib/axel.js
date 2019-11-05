// const ctx = require('axel');
const table = require('table');
// const termkit = require('terminal-kit');
// const color = require('colors');

const gameBoard = [
  [' ', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', 'X', ' '],
  [' ', ' ', 'X', ' ', ' '],
  [' ', 'O', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ']
];

gameBoard[0][0] = ' '.bgBlue;
console.log(table.table(gameBoard));
