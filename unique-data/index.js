import mediaData from './data.js'

// function getUniqueTags(data) {

//   const tags = data.map(podcast => podcast.tags).flat();

//   const uniqueTags = [];
//   tags.forEach(tag => {
//     if (!uniqueTags.includes(tag)) {
//       uniqueTags.push(tag)
//     }
//   })
//   return uniqueTags;
// }

function getUniqueTags(data) {
  const tags = data.map(podcast => podcast.tags).flat();
  const uniqueTags = {};
  // filter tags arr
  return tags.filter(tag => {
    // look up the tag in the uniqueTags obj
    if (!uniqueTags[tag]) {
      uniqueTags[tag] = true;
      // if it's not the, we have a unique item
      // put the item in our object with a value of true
      return true;
    }
    return false;
  });
}

console.log(getUniqueTags(mediaData))