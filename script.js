// Initalize the rows and columns (make these user-input later?)
let numRows = 10;
let numColumns = 10;
let numMines = 10;
const board = document.querySelector('#board');

// Populate the board
function populateBoard() {
  for(let i = 0; i < numRows*numColumns; i++) {
    const newDiv = document.createElement('div'); // Create a new child div to represent each cell in the board
    newDiv.id = `cell${i+1}`; // Give the cells unique IDs
    board.appendChild(newDiv); // Append the cells to the board
  }
}

populateBoard();
