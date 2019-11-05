
const boardGenerator = (length, height) => {
  const board = [];
  for (let i = 0; i < length; i++) {
    const sor = [];
    for (let j = 0; j < height; j++) {
      sor[j] = ' ';
    }
    board[i] = sor;
  } return board;
}
;
module.exports = {
  boardGenerator: boardGenerator
}
;
