import shoppingCart from './shopping-data.js'

function total(arr) {
  const total = arr.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return total.toFixed(2)
}

console.log(total(shoppingCart));