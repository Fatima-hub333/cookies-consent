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

for (i = 0; i < 5; i++) {
	if(i + 1 === 2)
		continue

	print(i+1)
	
	if(i === 3)
		break
}

// ToRainLanguage()
const toRainLanguage = (number) => {
  let result = ''
  if (number % 3 === 0) result += "Pling"
  if (number % 5 === 0) result += "Plang"
  if (number % 7 === 0) result += "Plong"
  
  return result || number
}

// isIsogram()
// Implement isogram check function. Isogram is a string in which all letters of the string are present only once.
// For example: console.log(isIsogram('ambidExtRously')) // true

const isIsogram = (string) => {
  const lowerCased = string.toLowerCase()
  const result = lowerCased.split('').every((v, i)=>console.log(v, i) || lowerCased.indexOf(v)===i)

  return lowerCased
}

console.log(isIsogram('ambidExtrously')) // true
console.log('patteRN') //false

console.log(toRainLanguage(3))
console.log(toRainLanguage(21))
console.log(toRainLanguage(35))
console.log(toRainLanguage(1))

// isLeapYear()
// leap year occurs every four years (those divisible by four) except for centaury years, but not when the year is divisible by 400.
// console.log(isLeapYear("2020")); //true

const isLeapYear = (year) => {
  const numberYear = Number(year)
  return numberYear%100 === 0 ? numberYear % 400 === 0 : numberYear % 4 === 0
}

console.log(isLeapYear("2020"));
console.log(isLeapYear("2018"));
console.log(isLeapYear("1700"));
console.log(isLeapYear("1600"));

// encoding & decoding function
// Implement encode and decode functions that follow run length encoding pattern. Run-length encoding is a form of data compression,
// where consecutive data elements are replaced by just one data value and count of that value.
// For example, console.log(encode('wwwiiuuuu'))
// console.log(decode('2u3a4o))

const encode = (string) => {
  return string.replace(/(\w)\1+/g, (m, v) => `${m.length}${v}`)
}

const decode = (string) => {
  return string.replace(/(\d+)(\w)/g, (x, y, z))
}

console.log('wwwiiuuuu') // 3w214u
console.log('2u3a4o')

// {Remove Duplicates from array with reduce()}
// Implement remove duplicates from array function using array.reduce - removeDuplicateValues()
// console.log(removeDuplicateValues(['one', 'two', 'one', 'three', 'three', 'two']));
const removeDuplicateValues = (array) => {
  return array.reduce((accumulator, value) => { 
    return accumulator.includes(value) ? accumulator : [...accumulator, value]
  }, [])
}

console.log(removeDuplicateValues(["one", "two", "one", "three", "three", "two"]));

// {Implement array map with reduce}
const map = (array, callback) => {
  return array.reduce((accumulator, value) => {
    return [...accumulator, callback(value)]
  }, [])
}

console.log(map([1, 2, 3], (v) => v + 1));

// {Flatten Array with reduce()}
// Implement flatten nested array using recursive reduce - makeFlat()
// Console.log(makeFlat(['one'], ['two', 'three'], ['four', ['five']]])) 
const makeFlat = (array) => {
  return array.reduce((accumulator, value) => {
    return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator, value]
  }, [])
}

console.log(map([1, 2, 3], (v) => v + 1));

// {Transoose Matrix}
const transoseMatrix = (array) => {
  return array[0].map((_, i)=> array.map(v => v[i]))
}

console.log(transoseMatrix([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]))