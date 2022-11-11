// function main() {
//   let arr = Array(6);
// for (let i = 0; i < 6; i++){
//   arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
// }
// sumHourglassMaker(arr);
// }

// function sumHourglassMaker(arrayRaw) {
//   var arrayHourglassSum = [];
//   for (var v = 0; v < arrayRaw.length - 2; v++){
//     for (var h = 0; h < arrayRaw.length - 2; h++){
//       //take the upper hourglass
//       let upperHead = arrayRaw[v][h] + arrayRaw[v][h + 1] + arrayRaw[v][h + 2];
//       //take the middle hourglass (belly)
//       let middleBelly = arrayRaw[v + 1][h + 1];
//       //take the bottom hourglass
//       let bottomLeg = arrayRaw[v + 2][h] + arrayRaw[v + 2][h + 1] + arrayRaw[v + 2][h + 2];
//       arrayHourglassSum.push(upperHead + middleBelly + bottomLeg);
//     }
//   }
// }

function main() {
    let arr = Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    // I will store the sum of each hourglass in this array
    let hourGlassSums = [];
    
    // Loop to iterate over the arrays (rows)
    for(let i=0; i<4; i++){
        // Loop to iterate over the numbers in the arrays (columns)
        for(let j=0; j<4; j++){
            // Each variable represents a layer of the hourglass
            let firstLayer = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            let secondLayer = arr[i+1][j+1];
            let thirdLayer = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            
            // In the array we initially defined we are going to push
            // the sum of every layer (the entire hourglass)
            hourGlassSums.push(firstLayer+secondLayer+thirdLayer);
        }
    }
    
    // Print the max number (maximum hourglass sum)
    console.log(Math.max(...hourGlassSums));
    
    // Note 
    // This will only work with 6 x 6 2D Arrays, because we are iterating a maximum
    // of 4 times, the amount just necessary to go through an entire 6x6 Array
}
