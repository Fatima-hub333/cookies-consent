const gameNightFood = {
  "🍕 pizza": 3, 
  "🌮 tacos": 10, 
  "🥗 salads": 7,
  "🍝 pasta": 5
}

function findTheWinner(obj) {
  // initialize some new variable to:
  // kepp track of the current highest vote number
  let highestVotes = 0;
  // keep track of the current winning item
  let winningItem = "";
  // for each food option in the food object
  for (let food in obj) {
    // is the current value higher than the value of highestVotes?
    if (obj[food] > highestVotes) {
      highestVotes = obj[food];
      winningItem = food;
    }
  }
  return `The winner is ${winningItem} with ${highestVotes} votes.`
    
      // yes: the new value of highestVotes in the current value and
      // winningItem = the current property
  // return string announcing the winner using winningItem and highestVote variable
}

console.log(findTheWinner(gameNightFood))