function processData(input) {
  input = input.split("\n");
  for (i in input) {
    if (input[i].length >= 2 && isNaN(input[i])) {
      let a1 = [];
      let a2 = [];
      for (j in input[i]) {
        if (j % 2 == 0) {
          a1.push(input[i][j]);
        } else {
          a2.push(input[i][j]);
        }
      }
      console.log(a1.join("") + " " + a2.join(""));
    }
  }
}

// {Array}
function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let arr2=[];
  for(let i=0; i<n ; i++) {
    arr2.unshift(arr[i]);
  }
  console.log(arr2.join(" "));
}