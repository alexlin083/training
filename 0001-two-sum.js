// test for use ssh  test
// O(n^2) 作法
let twoSum1 = function (nums, target) {
  //   console.log(nums);
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log("O(n^2) : " + [i, j]);
        return [i, j];
      }
    }
  }
};
const map = new Map();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let add = 13;
console.time("twoSum1");
twoSum1(arr, add);
console.timeEnd("twoSum1");
// console.log(i, j);
//--------------------------------------------------------------------------------
// // Map
let twoSum2 = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (map[target - value] >= 0) {
      console.log("O(n) : " + [map[target - value], i]);

      return [map[target - value], i];
    } else {
      map[value] = i;
    }
  }
};
console.time("twoSum2");
twoSum2(arr, add);
console.timeEnd("twoSum2");

// // console.log(map);
