function isAnagram(str1, str2) {
  // are the strings have the same length? if not return false.
  if (str1.length !== str2.length) return false;
  // sort string into an array
  // sort
  // join the array back together as a string
  const newStr1 = str1.split('').sort().join('');

  // repeat with second word
  const newStr2 = str2.split('').sort().join('');
  // are the two words equal? true or false
  return newStr1 === newStr2

}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));



