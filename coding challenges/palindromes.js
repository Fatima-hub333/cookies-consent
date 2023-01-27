/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

// Solution 1: for loop (manually)
function isPalindrome(str){
  let reverseStr = "";
 // reverse the word using the backward for loop to create a new string
  for (let i = str.length - 1; i >= 0; i--){
    reverseStr += str[i];
  }
   // compare the new string to the original word - are they equal?
    // yes : return true
    // no : return false
  if (reverseStr === str) {
    return true
  } else {
    return false
  }
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
