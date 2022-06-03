// Runtime: 201 ms, faster than 73.06% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 51.5 MB, less than 24.67% of JavaScript online submissions for Palindrome Number.

/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindrome(num) {
  num = num.toString();
  let numBackwards = num[num.length - 1];
  for (let i = num.length - 2; i >= 0; i--) {
    numBackwards += num[i];
  }
  return num === numBackwards ? true : false;
}

// let num = 121; // expected output: true
// let num = -121; // expected output: false
// let num = 10; // expected output: false

// console.log(num, isPalindrome(num));

/* 
9. Palindrone Number (Easy)

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

    -231 <= x <= 231 - 1

*/
