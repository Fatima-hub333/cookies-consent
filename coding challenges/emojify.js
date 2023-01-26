const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    // starts or ends with colon?
        // no: return word 
    if(!word.startsWith(":") && !word.endsWith(":")) return word; 
    
    // yes: remove colons 
    const slice = word.slice(1, -1);
    // exists in emoji object? 
    if(emojis[slice]){
         // yes: return emoji 
         return emojis[slice]
    } else {
        return slice;
    }
       
}

function emojifyPhrase(phrase){
  // split the passed in phrase into an array
  // map through the array and call emojifyWord() on each word in the phrase
  // join the array back together as a string, and return
  const newPhrase = phrase.split(" ").map(word =>emojifyWord(word));
  return newPhrase.join(" ")
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
