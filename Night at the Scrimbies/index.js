import podcasts from './data.js'

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];
function getHosts(data) {
  return data.reduce((acc, curr) => {
    return acc.concat(curr.hosts)
  }, [])
}

function assignAwards(data) {
  const hosts = getHosts(data);
  return hosts.map(host => {
    const randIndex = Math.floor(Math.random() * awards.length);
    return `${awards[randIndex]} ${host}`
  })
}

console.log(getHosts(podcasts));
console.log(assignAwards(podcasts))