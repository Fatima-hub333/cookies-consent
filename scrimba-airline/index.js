import podcasts from './data.js';

// a - b will sort an array in descending
// b -a will sort in ascending order

function sortByDuration(data, flightLength) {
  // Check if flight is greater than 60 minutes
  if (flightLength > 60) {
    // if yes, sort descending order (longest to shortest)
    data.sort((a, b) => b.duration - a.duration);
  } else {
    data.sort((a, b) => a.duration - b.duration);
  }
    // loop through my sorted array
  data.forEach(({title, duration }, index) => {
    console.log(`${index + 1}.${title}, ${duration} minutes`)
  });
      // construct a string using the title and duration props
      // use the index to number the list
      // conole.log each items
}

sortByDuration(podcasts, 60);