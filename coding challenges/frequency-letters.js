function countChars(str) {
  // initialize a new empty object to hold the letter counte
  const count = {};
  // remove all spaces and lowercase all characters of the string
  const name = str.toLowerCase().split(" ").join("");
  console.log(name)
  // loop throught the letters of the string
  for (let i = 0; i < name.length; i++){
    // if the character is not the obj, add it, give it a value of 1
    if (!count[name[i]]) {
      count[name[i]] = 1;
    } else {
      // if the character is already in the object, increment that char's value
      count[name[i]] += 1;
    }
    
  }
  // return the count object
  return count
  
}

console.log(countChars("Peggy Porth"))