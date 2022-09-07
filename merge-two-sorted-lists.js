/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

CONSTRAINTS
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

var mergeTwoLists = function (list1, list2) {
  let current = new ListNode(0);
  let newList = current;

  //if both list arent null
  while (list1 && list2) {

    if (list1.val <= list2.val) {
      //add list1.val to current when li1 is smaller than li2
      //list1 = the remainer of the array after taking out the one that has been added to current
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    //current will change to the next one before adding a new number to it
    //ex. [0, 1] current.next change the number to 1 from 0
    current = current.next;
  }

  //if either one are null
  if (!list1) {
    current.next = list2
  }

  if (!list2) {
    current.next = list1
  }

  return newList.next

};
