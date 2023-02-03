import podcasts from "./data.js"

function createDescriptionsFor(data) {
  return data.map(podcast => {
    const { title, duration, genre, hosts } = podcast;
    return {
      ...podcast, 
      description: `${title} is a ${duration} minute ${genre} podcast hosted by ${hosts[0]}.`
    }
  })
}

console.log(createDescriptionsFor(podcasts))

// psuedocode
// map through the data
// use title, duration, genre and host data to make description
// for each ppodcast object, add description property