class MyBook extends Book {
  constructor(
    title, author, price
  ) {
    super(title, author);
    this.price = price;
  }

  display() {
    const obj = {
      Title: this.title,
      Author: this.author,
      Price: this.price
    }
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value}`);
    }
  }
}

// {Second Challenge}
// {Solve challenge using TypeScript}

let value = inputLines.pop();
  let arr = value.split(' ');
  let newArray = [];
  let maxDiff = 0;
  
for (let i = 0; i < arr.length; i++){
  newArray.push(Number(arr[i]))
  maxDiff = Math.max(...newArray) - Math.min(...newArray)
}
console.log(maxDiff)