import shoppingCart from './savory-data.js'

function totalSavory(arr) {
  return arr.reduce((acc, curr) => {
    // check if the current item has a type of 'savory'
      // if yes, return acc += curr.price
    if (curr.type === "savory") return acc += curr.price;
      // if no, return acc
    return acc;
  }, 0);
}

console.log(totalSavory(shoppingCart))