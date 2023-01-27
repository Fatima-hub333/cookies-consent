const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    // create a new, empty string called dupesRemoved
    let dupesRemoved = '';
    
    // loop through the string we want to remove dupes from 
    for(let i = 0; i < chars.length; i++){
         // for every character in the string, check: is it in dupesRemoved?
         if(!dupesRemoved.includes(chars[i])){
             // if no, add it
             dupesRemoved += chars[i];
         }
            // if yes, keep going through the loop (do nothing)
    }
       
    // dupesRemoved -- it has no duplicates!
    return dupesRemoved;
}

console.log(removeDupeChars(password));