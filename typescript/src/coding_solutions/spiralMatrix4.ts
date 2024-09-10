import { ListNode } from "./model/listNode";

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const result = create2DArray(m, n);
  let currentRowSize = m;
  let currentColumnSize = n;

  const directionMap = { right: 'down', down: 'left', left: 'up', up: 'right' }
  let currentDirection = 'right';

  let currentRowIndex = 0
  let currentColumnIndex = 0
  while (head) {
    result[currentRowIndex][currentColumnIndex] = head.val
    head = head.next
    switch (currentDirection) {
      case 'right':
        if (currentColumnIndex + 1 >= currentColumnSize || result[currentRowSize][currentColumnIndex + 1] !=-1) {
          currentDirection = directionMap[currentDirection];
          currentRowIndex++;
          currentColumnSize--;
        } else {
          currentColumnIndex++;
        }
        break;
      case 'down':
        if (currentRowIndex + 1 >= currentRowSize || result[currentRowSize + 1][currentColumnIndex] !=-1) {
          currentDirection = directionMap[currentDirection];
          currentColumnIndex--;
          currentRowSize--; 
        } else {
          currentRowIndex++;
        }
        break;
      case 'left':
        if (currentColumnIndex - 1< 0 || result[currentRowSize][currentColumnIndex - 1] !=-1 ) {
          currentDirection = directionMap[currentDirection];
          currentRowIndex--;
          currentColumnSize--;
        } else {
          currentColumnIndex--;
        }
        break;
      case 'up':
        if (currentRowIndex - 1 < 0 || result[currentRowIndex - 1][currentColumnIndex] != -1 ) {
          currentDirection = directionMap[currentDirection];
          currentColumnIndex++;
          currentRowSize--; 
        } else {
          currentRowIndex--;
        }
        break;
    }
  }

  return result;
};

function getNextPosition(direction: string, rowIndex: number, columnIndex: number): { rowIndex: number, columnIndex: number } {
  const result = { rowIndex: rowIndex, columnIndex: columnIndex }
  switch (direction) {
    case 'right': result.columnIndex = result.columnIndex + 1; break;
    case 'down': result.rowIndex = result.rowIndex + 1; break;
    case 'left': result.columnIndex = result.columnIndex - 1; break;
    case 'up': result.rowIndex = result.rowIndex - 1; break;
  }
  return result;
}

function create2DArray(rows: number, cols: number, defaultValue: number = -1): number[][] {
  const array: number[][] = [];

  for (let i = 0; i < rows; i++) {
    const row: number[] = [];
    for (let j = 0; j < cols; j++) {
      row.push(defaultValue);
    }
    array.push(row);
  }

  console.log(array);

  return array;
}