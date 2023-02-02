import products from './holiday-gift-data.js'

// positive num = a before b
// negative - b bedore a
// 0 - nothing changes


// a - b sorts numbers in ascending order and
// b -a sorts numbers in descending order

function sortProducts(data) {
  return data.sort((a, b) => {
    return a.price - b.price
  })
}

const listByChapest = sortProducts(products);
// console.log(listByChapest)

listByChapest.forEach(item => console.log(item.product, item.price))
