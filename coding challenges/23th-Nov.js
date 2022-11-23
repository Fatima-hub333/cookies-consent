this.removeDuplicates = function (head) {
  if (head && head.next) {
    let prev = head;
    while (prev.next) {
      if (prev.data === prev.next.data) {
        prev.next = prev.next.next;
      } else {
        prev = prev.next;
      }
    }
  }
  return head;
}

// {Running Time & complexity}
function processData(input) {
  let arr = input.split('\n').map(v => parseInt(v)).slice(1);
  for (const a of arr) {
    const sqrt = Array(Math.floor(Math.sqrt(a)) - 1).fill(2).map((v, i) => v + i)
    console.log(a === 1 || sqrt.some(i => a % i == 0) ? 'Not prime' : 'Prime')
  }
}