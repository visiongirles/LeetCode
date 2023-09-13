/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function checkSumAndReminer(val1, val2, currentReminder) {
  let sum = val1 + val2 + currentReminder;
  let reminder = 0;
  if (sum >= 10) {
    reminder = 1;
    sum = sum - 10;
  }
  return { sum, reminder };
}

var addTwoNumbers = function (l1, l2) {
  let reminder = 0;

  let head = new ListNode(0);
  let resultList = head;

  while (l1 !== null) {
    if (l2 === null) {
      let result = checkSumAndReminer(l1.val, 0, reminder);
      resultList.next = new ListNode(result.sum);
      resultList = resultList.next;
      reminder = result.reminder;
      l1 = l1.next;
    } else {
      let result = checkSumAndReminer(l1.val, l2.val, reminder);
      resultList.next = new ListNode(result.sum);
      resultList = resultList.next;
      reminder = result.reminder;
      l1 = l1.next;
      l2 = l2.next;
    }
  }

  while (l2 !== null) {
    let result = checkSumAndReminer(0, l2.val, reminder);
    resultList.next = new ListNode(result.sum);
    resultList = resultList.next;
    reminder = result.reminder;
    l2 = l2.next;
  }

  if (reminder != 0) {
    resultList.next = new ListNode(1);
  }

  return head.next;
};
