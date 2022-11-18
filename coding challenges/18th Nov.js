let numSwaps = 0;

function printResult(arr, swaps) {
  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${arr[0]}`)
  console.log(`Last Element: ${arr[arr.length-1]}`)
}

function bubbleSort(arr) {
  var swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        numSwaps++
        swapped = true
      }
    }
  } while (swapped)
}

bubbleSort(a)
printResult(a, numSwaps)

// Second Challenge
function main() {
  function printArray<T>(items: T[]) {
    let length = 0;
    for (var item of items) {
      if (length == 0) {
        length = Number(item);
      } else {
        length -= 1;
        console.log(item);
      }
    }
  }
  printArray(inputLines);
}