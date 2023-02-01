import products from './dataa.js'

function getsaleItems(data) {
  // filter the data by product.type -- only sweet
  return data
    .filter(product => product.type === "sweet")
    .map(({item, price}) => {
      return {
        item,
        price
      }
    })
  // loop through the data using map
    // for every candy, return a new object with only item and price
};

const shoppingCart = getsaleItems(products)
console.log(shoppingCart)