/*
 * @param {string[]} strs
 * @return {string}
 */

let strs = ["flower","flow","flight"];

var longestCommonPrefix = function(strs) {
	let common = "";
    for (let i = 0; i < strs[0].length; i++) {
    	for (let j = 0; j < strs[0].length; j++) {
    		for (let k = 1; k < strs.length; ) {
    			while (strs[i][j] === strs[k][j]) {
    				if (k < strs.length) {
    					k++;
    				} else if (k = strs.length) {
    					return common[i] += strs[i][j];
    				} else {
    					return common;
    				}
    			}
    			// return common;
    		}
    		// return common;
    	}	
    	// return common;
    }
    // return common;
};

console.log(longestCommonPrefix(strs));




//---------------------------------
// 14 Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

 

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lower-case English letters.

//--------------------------