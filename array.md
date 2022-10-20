An array is a container of elements
Elements have a specific value and data type like "ABC", TRUE or FALSE etc.
Each element also has it's own index, which is used to access the element. 
Elements aree stored at contiguous memory locations
An index is always less than the total number of array items.
In terms of syntax, any variable that is declared as an array can store multiple values.
Almost all languages have the same comprehension of arrays but have different ways of declaring and initializing them. However, three parts will always remain common in all the initizlizations, i.e array name, elements, and the data type of elements.

Here are some reasons for using arrays in Data Structure;
- Arrays are best for storing multiple values in a single variable
- Arrayas are better at processing many values easily and quickly
- Sorting and searching the values is easier in arrays

arrayName[indexNum]
balance[1]

import array
balance = array.array('i', [300, 200, 100])
print(balance[1])

Time complexity
Access O(1)
search O(n)
Search (sorted array) O(log(n))
insert O(n)
insert(at the end) O(1)
remove O(n)
Remove(at the end) O(1)

1) Sliding Window Technique - O(n)

const maxProfit = (prices) => {
  let buy = 0; //Buy
  let sell = 1; //Sell
  let max_profit = 0;
  while (buy < prices.length){
    if(prices[buy] < prices[sell]) {
      let profit = prices[sell] - prices[buy]; //our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      buy = sell;
    }
    sell++;
  }
  return max_profit
}

var productExceptSelf =  function(nums) {
  const result = []
  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    reult[i] = prefix
    prefix *= nums[i]
  }

  let suffix = 1
  for (let i = nums.length -1; i >= 0; i--){
    result[i] *= suffix
    suffix *= nums[i]
  }
  return result
};

var maxSubArray = function(nums){
  let max = nums[0]
  let cur = 0;

  for(let i =0; i < nums.length; i++){
    cur += nums[i];

    if(cur > max) max = cur
    if(cur < 0) cur = 0
  }
  return max;
};

var containsDuplicate = function(nums){
  <!-- const s = new Set(nums);
  return s.size !== nums.length -->
  let distinct = [...new Set(nums)]
  return (distinct.length !== nums.length)
}

var maxProduct = function(nums){
  let prevMax = nums[0]
  let prevMin = nums[0]
  let result = nums[0]
  for(let i =1; i < nums.length; i++){
    curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
    curMax = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevmax);

    prevMax = curMax
    preMin = curMin

    result = Math.max(curMax, result);
  }
  return result;
}

function threeSum(nums){
  const results = []
  if (nums.length < 3) return results
  nums = nums.sort((a, b) => a - b)
  let target = 0

  for (let i =0; i < nums.length -2; i++){
    if (nums[i] > target) break
    if (i > 0 && nums[i] === nums[1 - 1]) continue
    
    let j = i + 1
    let k = nums.length -1


    while (j < k){
      let sum = nums[i] + nums[j] + nums[k]

      if(sum === target){
        results.push([nums[i], nums[j], nums[k]])
      
      while (nums[j] === nums[j + 1]) j++
      while (nums[k] === nums[k - 1]) k--

      j++
      k--
      } else if(sum < target) {
        j++
      } else {
        k--
      }
    }
  }
  return results;
};

var maxArea = function(height){
  let l = 0;
  let m;
  let r = height.length-1;
  let res=0
  while(l < r){
    m = Math.min(height[l], height[r]);
    area = m*(r - 1);
    res= Math.max(area, res);
    if (m===height[l]){
      l++
    } else{
      r--;
    }
  }
  return res
};

const maxSlidingWindow = (nums, k) => {
  const res = [];
  const q = [];

  for (let i = 0; i < nums.length; i++){
    while (q.length -1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
    q.push(nums[i]);

    const j = i + 1 - k;
    if (j > = 0){
      res.push(q[0]);
      if(nums[j] === q[0]) q.shift();
    }
  }
  return res;
}

{String}
A string is a sequence of characters. Many tips that apply to arrays also apply to strings. Common data structures that looking up for strings:
Trie/Prefix Tree
Suffix Tree

Common String algorithms:
1) Rabin Karp; for effecient searching of substring using a rolling hash
2) KMP for efficient searching of substring

{Time Complexity }
Access    - O(1)
Search -    O(n)
Insert -  O(n)
Remove   - O(n)


var isAnagram = function(s, t){
  if(s.length !== t.length)
  return false;
  let sFreq =  Array(26).fill(0);

  for (let c of s) {
    let idx = c.charCodeAt() - 97;
    sFreq[idx]+=1;
  }

  for(let c of t){
    let idx = c.CharCodeAt() - 97;
    if(!sFreq[idx])
    return false;
    sFreq[idx] -= 1;
  }
  return true;
}

let isAnagram = function(s, t){
  if(s.length !== t.length)
  return false;

  let sFreq = {};
  for(let c of s){
    sFreq[c] = (sFreq[c] || 0) + 1;
  };
  for (let c of t){
    if(sFreq[c]) sFreq[c] -=1;
    else return false;
  }
  return true;
}

const reverse = (str) => {
  const toArr = str.split("");
  const reversed = toArr.reverse();
  return reversed.join("");
}

const lowerTrim = (str) => {
  const trimmed = str.replace(/[^a-z0-9]/gi, '');
  return trimmed.toLowerCase();
}

let isPalindrome = function(s){
  const alphaNum = lowerTrim(s);
  return alphaNum === reverse(alphaNum);
};

const alphaNumOnly = (str) => {
  const alphaNum = str.replace(/[^a-z0-9]/gi, '');
  return alphaNum.toLowerCase();
}

let isPalindrome = function(s){
  let str = alphaNumOnly(s);
  for (let i =0; j = str.length - 1; i < j; i++, j--){
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}


let lengthoflongestSubstring = function(s){
  let start = 0;
  let result = 0;
  const lastSeen = {};
  for (let end = 0; end <  s.length; end++){
    const c = s.charAt(end);
    if (c in lastSeen){
      start = Math.max(start, lastSeen[c] + 1);
    }
    lastSeen[c] = end;
    result = Math.max(result, end - start + 1);
  }
  return result;
}

Time Complexity: O(n)
Space complexity: O(1)

let characterReplacement = function(s, k){
  let map = [26]
  let largestCount = 0, beg = 0, maxlen = 0;
  for (let end = 0; end < s.length; end++){
    const c = s[end]
    map[c] = (map[c] || 0) + 1
    largestCount = Math.max(largestCount, map[c])
    if(end - beg + 1 - largestCount > k){
      map[s[beg]] -= 1
      beg += 1
    }
    maxlen = Math.max(maxlen, end - beg + 1)
  }
  return maxlen;
};

const findAnagrams = (s, p) => {
  const output = [];
  const neededChars = {};

  for (let char of p){
    if(char in neededChars){
      neededChars[chars]++
    } else neededChars[chars] = 1
  }

  let left = 0;
  let right = 0;
  let count = p.length

  //start sliding the window
  while (right < s.length){
    if (neededChars[s[right]] > 0) count--;

    neededChars[s[right]]--;
    right++;

    if (count === 0) output.push(left);
    if (right - left == p.length){
      if (neededChars[s[left]] >= 0) count++;

      neededChars[s[left]]++;
      left++;
    }
  }
  return output;
}

var minWindow = function(s, t){
  const fc={}
  let start = 0, minLengths= s.length+1, matches=0, substrStart=0;

  for (let i=0; i < t.length; i++){
    let char=t[i]
    fc[char]? fc[char]++; fc[char]=1;
  }

  for (let end = 0; end < s.length; end++){
    let right= s[end];

    if(right in fc){
      fc[right]--;
      if (fc[right] >= 0) matches++;
    }

    while (matches === t.length){
      if(minLength > end-start+1){
        minLength=end-start+1;
        substrStart= start
      }

      let left=s[start];
      start++;
      if(left in fc){
        if(fc[left]===0) matches--;
        fc[left]++;
      }
    }
  }
  if (minLength > s.length) return '';
  return s.substring(substrStart, minLength+substrStart)
};

var groupAnagrams = function(strs){
  let obj = {}
  for (let str of strs){
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : obj[letters] = [str]
  }
  return Object.values(obj);
};

<!-- Time Complexity: O(n*klog(k))
Space Complexity: O(n) -->

var groupAnagrams = function(strs){
  let m = new Map();
  for(let str of strs){
    let sorted = str.split("").sort().join("");
    if(m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
    else m.set(sorted, [str]);
  }
  return Array.from(m.values());
};

var longestPalindrome = function(string){
  let longestPalLength = 0;
  let longestPalLeft = 0;
  let longestPalRight = 0;

  var getLongestPalindrome = function (leftPosition, rightPosition) {
    while (
      leftPosition >= 0 &&
      rightPosition < string.length &&
      string[leftPosition] === string[rightPosition]
    ) {
      leftPosition--;
      rightPosition++;
    }

    if (rightPosition - leftPosition > longestPalLength){
      longestPalLeft = leftPosition + 1;
      longestPalRight = rightPosition - 1;
      longestPalLength = longestPalRight - longestPalLeft + 1;
    }
  };

  for (let i=0; i< string.length; i++){
    getLongestPalindrome(i, i + 1);
    getLongestPalindrome(i, i);

    if ((string.length - i) * 2 < longestPalLength) {
      break;
    }
  }
  return string.slice(longestPalLeft, longestPalRight + 1);
}


{Recursion}
Recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same pproblem. All recursive functions contains two parts;
1) A base case (or cases) defined, which defines when the recursion is stopped - otherwise it will go on forever!
2) Breaking down the problem into smaller subproblems and invoking the recursive call.

One of the most common example of recursion is the 'Fibonacci' sequence.
Base cases: fib(0) = 0 and fib(1) = 1
Recurrence relation: fib(i) = fib(i - 1) + fib(i - 2)

def fib(n):
if n <= 1
return n
return fib(n - 1) + fib(n - 2)

Memoization: In some cases, you may be computing the result for previously computed inputs. Let's look at the Fibonanci example again. Fib(5) calls Fib(4) and Fib(3). Time Complexity O(n)

{Generate Parenthesis}
var generateParenrhesis = function(n){
  let stack = []
  let res = []
  let orginialLength = n
  const recursive=(n, current) =>{
    if(n === 0){
      res.push(current)
      return
    }

    if (stack.length && stack[stack.length-1]==="("){
      stack.pop()
      recursive(n-1, current + ")")
      stack.push("(")
    }

    if (current.split("").filter(item=>item==="(").length < originalLength){
      stack.push("(")

      recursive(n-1, current+"(")
      stack.pop("(")
    }
  }

  recursive(n*2, "")
  return res
}

{Combinations}

var combine = functiona(n, k){
  const output = []

  const backtracking = (current, startNumber, k) => {
    if (n - startNumber + 1 < k) return;
    if (k ===0) return output.push(current);

    for(let i = startNumber; i<= n; i++){
      const newCurrent = [...current];
      newCurrent.push(i);
      backtracking(newCurrent, i + 1, k -1);
    }
  };

  backtracking([], 1, k);

  return output;
}

{Subsets}
const subsets = nums => {
  const output = []

  const backtrack = (idx, subset) => {
    output.push([...subset]);

  for (let i =idx, i< nums.length; i++){
    subset.push(nums[i]);
    backtrack(i + 1, subset);
    subset.pop()
    }
  };
  backtrack(0, []);
  return output;
};

"Recurssion means defining a problem in terms of itself". This can be a very powerful tool in writing algorithms. Recursion comes directly from Mathematics, where there are many examples of expressions written in terms of themselves. For example, the Fibonnaci sequence is defined as: F(i) = F(i-1)+F(i-2).

{Letter Combinations of a Phone Number}

let alphabet = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8':  'tuv',
  '9':  'wxyz'
}

function permute(permutations, letters){
  let result = []

  for(let letter of letters){
    for(let permutation of permutations){
      result.push(permutation + letter)
    }
  }
  return result
}

function letterCombinations(digits){
  if(digits.length === 0){
    return[]
  }

  return digits.split('').reduce((previous, current) => {
    return permute(previous, alphabet[current])
  }, [''])
};

{Subsets II}
class solution {
  function subsetWithDup(_nums: [Int]) -> [[Int]] {
    var ans = Set
  }
}

var subsetsWithDup = function(nums){
  nums.sort();
  let output = [];
  backtracking(0, [], nums, output);
  return output
};

function backtracking(index, list, nums, output){
  if(index > nums.length) return
  console.log("output: ", output);
  console.log("list: ", list);
  output.push([...list]);
  for(let i = index; i < nums.length; i++){
    if(i > index && nums[i] === nums[i - 1]) continue
    list.push(nums[i]);
    backtracking(i+1, list, nums, output);
    list.pop();
  }
  return output;
}

{Permutations}

const permute = (nums) => {
  const used = new Set();
  const path = [];
  const res = [];

  const dfs = () => {
    if (path.length === nums.length){
      res.push([...path]);
    }

    for(let i = 0; i < nums.length; i++){
      if(used.has(nums[i])) continue;

      path.push(nums[i]);
      used.add(nums[i]);

      dfs()

      path.pop();
      used.delete(nums[i])
    }
  }

  dfs();
  return res;
}

{Suduko Solver}
var solveSudoku = function(board){
  for(let i = 0; i < board.length; i++){
    for(let j=0; j < board[0].length; j++){
      if(board[i][j] === '.'){
        for (let k =1; k <= 9; k++){
          const num = k.toString()
          if(isNumValid(i, j, num, board)){
            board[i][j] = num;

            if(solveSudoku(board) === true){
              return true
            } else {
              board[i][j] = '.'
            }
          }
        }
        return false
      }
    }
  }
  return true
};

function isNumValid(row, col, num, board){
  for(let i =0; i< 9; i++){
    if(board[row][i] === num) return false

    if(board[i][col] === num) return false

    const currentMatrixRow = Math.floor(row/3)
    const currentMatrixCol = Math.floor(col/3)

    const currentRow = 3 * currentMatrixRow + Math.floor(i/3)
    const currentCol = 3 * currentMatrixCol + i%3

    if(board[currentRow][currentCol] === num) return false
  }
  return true;
}



















