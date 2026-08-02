// Initalize the rows and columns (make these user-input later?)
let numRows = 10;
let numColumns = 10;
let numMines = 10;
const board = document.querySelector('#board');
const boardArray = [];

// Populate the board
function populateBoard(gameDiff) {
  board.querySelectorAll(":scope > div").forEach(div => div.remove()); // Clear the board

  // Determine difficulty (numMines)
  if(gameDiff === 'easy') {
    numMines=10; 
  } else if(gameDiff === 'med') {
    numMines=15;
  } else if(gameDiff === 'hard') {
    numMines=20;
  } else {
    console.error();
  };

  // Nested loop creating rows and columns of cell divs
  for(let i = 0; i < numColumns; i++) {
    const currentRow = [];
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('col');

    for(let j = 0; j < numRows; j++) {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add(`cell${i+1},${j+1}`); // Give each cell a unique class col,row (should be row,col)

      rowDiv.appendChild(cellDiv)
      currentRow.push(cellDiv);
    }

    board.appendChild(rowDiv);
    boardArray.push(currentRow);
  }
}