var solveSudoku = function (board) {
  const _solveSudoku = function(board) {
    
  }
  return _solveSudokuRec();
};

var validateSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (!(validateSudokuSmallSquare(board, i, i) &&
      validateSudokuRow(board, i) &&
      validateSudokuColumn(board, i)
    )) {
      return false;
    }
  }
  return true;
};

var validateSudokuRow = function (board, rowIndex) {
  const numbersToCheck = [];
  for (i = 0; i < 9; i++) {
    numbersToCheck.push(board[rowIndex][i]);
  }
  return isValid(numbersToCheck)
};

var validateSudokuColumn = function (board, columnIndex) {
  const numbersToCheck = [];
  for (i = 0; i < 9; i++) {
    numbersToCheck.push(board[i][columnIndex]);
  }
  return isValid(numbersToCheck)
};

var validateSudokuSmallSquare = function (board, rowIndex, columnIndex) {
  const numbersToCheck = [];
  for (i = Math.floor(rowIndex / 3) * 3; i < (Math.floor(rowIndex / 3) * 3) + 3; i++) {
    for (j = Math.floor(columnIndex / 3) * 3; j < (Math.floor(columnIndex / 3) * 3) + 3; j++) {
      numbersToCheck.push(board[i][j]);
    }
  }
  return isValid(numbersToCheck)
};

var isValid = function (arr) {
  const set = new Set();
  for (let num of arr) {
    if (num === '.') {
      continue;
    } 
    if (set.has(num)) {
      return false;
    }
    set.add(num);
  }
  return true;
};

module.exports = { validateSudoku }