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