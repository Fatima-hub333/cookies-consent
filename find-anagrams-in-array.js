const anagrams = [
  "moz biblical torchbearers",  
  "it's razorbill beachcomber", 
  "och mcrobbie trailblazers", 
  "bib chorizo cellarmaster", 
  "thor scribble carbimazole", 
  "zilla borscht abercrombie", 
  "brazil scorcher batmobile", 
  "dame shelburne characterizing", 
  "uber englishman characterized", 
  "agnes rhumbline characterized", 
  "rehab scrutinized charlemagne", 
  "dreams zurich interchangeable", 
  "bam hamster technocratic", 
  "mechatronic masterbatch", 
  "bam ratchet mechatronics"
]

function sortPhrase(phrase) {
  return phrase.toLowerCase().split('').sort().join('').trim();
}
function isAnagraminArray(anagram, arr) {
  return arr.filter(item => {
    const word1 = sortPhrase(anagram);
    const word2 = sortPhrase(item);

    return word1 === word2;
  })
}

console.log(isAnagraminArray("Bob Ziroll Scrimba Teacher", anagrams))

// function isAnagraminArray(anagram, arr) {
  // use .filter()
  // use sortPhrase() to sort both the input phrase and the current phrase in the array
  // compare the two words to return true or false
//}