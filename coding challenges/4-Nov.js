const abc = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = (string) => {
  // const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')
  // return abc===processedString
  const regexMatch = new Set(string.toLowerCase().match(/[a-z]/gi))
  return regexMatch.size===26
}

console.log(isPangram('The quick Brown fox jumps over the lazy DOG'))
console.log(isPangram('abcdefghijkrstuvwxyz'))
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))


// Task: call an JSONPlaceholder api, get 10 users. Implement a function getusers() that returns only names and emails of the users whose names contains letter k.

// {Api array methods}
const getusers = async () => {
  const api = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(api)
  const json = await response.json()

  const result = json.filter(v => v.name.toLowerCase().includes('k')).map(({ name, email }) => ({ name, email }))
  // const result = json.filter(v=>v.name.toLowerCase().includes('k')).map(v=>({name:v.name, email:v.email}))

  return result
}

(async function () {
  try {
    console.log(await getusers())
  } catch (err) {
    console.log(err)
  }
})();

getusers()

//Operators (Day- 2 Challenge)

function solve(meal_cost, tip_percent, tax_percent) {
  let tip = (tip_percent / 100) * meal_cost;
  let tax = (tax_percent / 100) * meal_cost;
  let totalSum = (meal_cost + tip + tax);
  console.log(Math.round(totalSum));
}

function main() {
  const meal_cost = parseFloat(readLine(), trim());
  const tip_percent = parseInt(readLine().trim(), 10);
  const tax_percent = parseInt(readLine().trim(), 10);
  solve(meal_cost, tip_percent, tax_percent);
}

//Intro to conditional Statements, (Day 3 challenge)
function main() {
  var n = parseInt(readLine());
  if (n % 2 !== 0) {
    console.log("Weird");
  } else if (n % 2 === 0 & n >= 2 && n <= 5) {
    console.log("Not Weird")
  } else if (n % 2 === 0 && n >= 6 && n <= 20) {
    console.log("weird")
  } else if (n % 2 === 0 && n > 20) {
    console.log("Not Weird")
  }
}

//Class vs. Instance (Day 4 Challenge)
function Person(initialAge) {
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.");
    this.age = 0;
  } else {
    this.age = initialAge;
  }
  this.amIOld = function () {
    if (this.age < 13) {
      console.log("You are young.");
    } else if (this.age >= 13 && this.age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.")
    }
  };
  this.yearPasses = function () {
    this.age++;
  }
}