const kittyScores = [
  [39, 99, 76], 89, 98, [87, 56, 90],
  [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
  ["🐟", "💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

// function flatten(arr) {
//   return arr.flat();
// }

function flatter(arr) {
  // initialize a new, empty array
  // loop through the passed in array and chek - string or array?
    // if the item is string, push into the new array
    // if the item is an array, loop through it, pushing each item into the
  // return new array

  const newArr = [];
  arr.forEach(element => {
    console.log(element)
  });
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores))