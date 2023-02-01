import podcasts from './data.js'

function getFreePodcasts(data) {
  // filter list by paid property
  // use map to create a new array of objects with only the specified properties
  return data
    .filter(item => item.paid === false)
    .map(podcast => {
      return {
        title: podcast.title,
        rating: podcast.rating,
        paid: podcast.paid
      }
    });
}

console.log(getFreePodcasts(podcasts))