/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "(" && s[i + 1] === ")") {
      i++;
    } else if (s[i] === "[" && s[i + 1] === "]") {
      i++;
    } else if (s[i] === "{" && s[i + 1] === "}") {
      i++;
    } else if (i === s.length) {
      return true;
    } else {
      return false;
    }
  }
}

// let s = "()"; // output: true
// let s = "()[]{}"; // output: true
// let s = "(]"; // output: false

// console.log(s, isValid(s));

/*
20. Valid Parentheses (Easy)
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

 
Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false


Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.
*/
