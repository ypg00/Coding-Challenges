/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
*/

 let list1 = [1,2,4];
 let list2 = [1,3,4];
 // expected output: [ 1, 1, 2, 3, 4, 4 ]

// let list1 = [];
// let list2 = [];
// expected output: []

// let list1 = [];
// let list2 = [0];
// expected output: [0]

mergeTwoLists(list1, list2);

function mergeTwoLists(list1, list2) {
	let list3 = [];
	for (let i = 0; i < list1.length;) {
	   	for (let j = 0; i < list2.length;) {
	   		if (list1[i] < list2[j] || list2[j] === undefined) {
	   			list3.push(list1[i]);
	   			i++;
	   		} else if (list1[i] > list2[j] || list1[i] === undefined) {
	   			list3.push(list2[j]);
	   			j++;
	   		} else {
	   			list3.push(list1[i], list2[j]);
	   			i++;
	   			j++;
	   		}
	   	}
	}
	console.log(`list3: ${list3}`);
	return list3;
}

/*
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 
Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: list1 = [], list2 = []
Output: []

Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

 
Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.
*/