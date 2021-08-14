// test for use ssh  test

let twoSum = function (nums, target) {
  console.log(nums);
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`Output: [index[${i}] , index[${j}]], target = ${target}`);
      }
    }
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let add = 8;

twoSum(arr, add);
