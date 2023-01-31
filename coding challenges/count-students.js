const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];
function sumArray(arr) {
  // initialize a new variable to hold the sum of the arr
  let sum = 0;
  // loop through the studentCount arr, add each value to the sum
  // for (let i = 0; i < arr.length; i++){
  //   console.log(sum += arr[i])
  // }
  arr.forEach(item => sum += item)
  // after done looping, return the sum
  return sum;
}

console.log(sumArray(studentCount))