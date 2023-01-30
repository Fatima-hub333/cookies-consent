const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon", 
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli", 
  "🧀 cheese",
  "🥦 broccoli", 
  "🌶️ hot sauce"
]

// function removeDupesFromArray(arr){
//   create a new arr to hold unique items
//   const uniqueItems = [];
//   for each item in recipe arr
//     if the item is NOT yet in the unique arr, push it in
//     if it is in the unique arr, move on to the next item (do nothing)
//   arr.forEach(item => {
//     if (!uniqueItems.includes(item)) {
//       uniqueItems.push(item);
//     }
//   });
//     return the unique arr
//   return uniqueItems;
// }

// function removeDupesFromArray(arr) {
  // create a new object to keep trak of duplicates
  // use filter to loop through each item in the arr
    // for each item in arr
      // look up the item in the lookup table
      // if the item does NOT exist in the lookup, add it and return true
    // return false
  
//   const trackDupes = {};
//   return arr.filter(item => {
//     if (!trackDupes[item]) {
//       trackDupes[item] = true;
//       return true;
//     }
//     return false;
//   });
// }

function removeDupesFromArray(arr) {
  return [...new Set(arr)]
}

console.log(removeDupesFromArray(eggScrambleRecipe));