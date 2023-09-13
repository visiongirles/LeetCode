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
  let newReminder = 0;
  if (sum >= 10) {
    newReminder = 1;
    sum = sum - 10;
  }
  return { sum, newReminder };
}

var addTwoNumbers = function (l1, l2) {
  let reminder = 0;

  //create first
  let result = checkSumAndReminer(l1.val, 0, reminder);
  let head = new ListNode(result.val);
  let resultList = head;

  while (l1 !== null) {
    if (l2 === null) {
      let result = checkSumAndReminer(l1.val, 0, reminder);
      let newNode = new ListNode(result.sum);
      resultList.next = newNode;
      resultList = resultList.next;
      reminder = result.reminder;
      l1 = l1.next;
    } else {
      let result = checkSumAndReminer(l1.val, 0, reminder);
      let newNode = new ListNode(result.sum);
      resultList.next = newNode;
      resultList = resultList.next;
      reminder = result.reminder;
      l1 = l1.next;
      l2 = l2.next;
    }
  }

  while (l2 !== null) {
    let result = checkSumAndReminer(l1.val, 0, reminder);
    let newNode = new ListNode(result.sum);
    resultList.next = newNode;
    resultList = resultList.next;
    reminder = result.reminder;
    l2 = l2.next;
    l1 = l1.next;
  }

  if (reminder != 0) {
    let newNode = new ListNode(1);
    resultList.next = newNode;

    resultList = head;
  }
  return resultList;
};
