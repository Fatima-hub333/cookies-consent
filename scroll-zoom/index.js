const zoomElement = document.querySelector('.workspace');
let zoom = 1;

document.addEventListener("wheel", function(e) {
  if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += 0.06)})`;
  } else {
    zoomElement.style.transform = `scale(${(zoom -= 0.06)})`;
  }
});

// What are falsey values in JavaScript?
// if(null){
//    console.log('null')
//}

// if(undefined){
//    console.log('undefined')
//}

// if(0){
//    console.log('0')
//}

// if(''){
//    console.log('empty')
//}

// if(fasle){
//    console.log('false')
//}

//A matrix is a 2-dimensional array. Questions involving matrices are usually related to dynamic programming or graph traversal. Matrices can be used to represent graphs where each node is a cell on the matrix which has 4 neighbors. This page will focus on questions which don't use matrix as graphs.
// {Creating an Empty N x M matrix}
// For questions involving traversal or dynamic programming, you almost always want to make a copy of the matrix wit the same size/dimensions that is initialized to empty values to store the visited state or dynamic programming table.

// {Transposing a Matrix}
// The transpose of a matrix is found by interchanging its rows into columns or columns into rows.
// Many grid-based games can be modeled as a matrix, such as Tic-Tac-Toe, Suduko, Crossword, Connect 4 etc. It is not uncommon to be asked to verify the winning condition
// of the game. One trick is to write code to verify the matrix for the horizontal cells, transpose the matrix, and reuse the logic for horizontal verification to verify originally vertical cells.
