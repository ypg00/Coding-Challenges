// Runtime: 188 ms, faster than 19.75% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.6 MB, less than 61.27% of JavaScript online submissions for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

// let nums = [2, 7, 11, 15];
// let target = 9;
// output: [0, 1]

// let nums = [3, 2, 4];
// let target = 6;
// output: [1,2]

// let nums = [3, 3];
// let target = 6;
// output: [0, 1]

// console.log(twoSum(nums, target));

/*

1. Two Sums (Easy)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
