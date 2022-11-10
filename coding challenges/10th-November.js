function main() {
  let n = parseInt(readLine().trim(), 10);
  //find binary number
  let digits = [];
  while (n > 0) {
    let remainder = n % 2;
    n = Math.floor(n / 2);
    digits.unshift(remainder);
  }
  let binaryNum = digits.join('');
  // console.log(binaryNum);

  //find max occurence of consecutive ones
  let consecutiveOnes = binaryNum.split('0');
  let lengths = [];
  consecutiveOnes.forEach((item, i) => {
    lengths.push(consecutiveOnes[i].length)
  });

  let max = Math.max(...lengths);
  console.log(max);
}