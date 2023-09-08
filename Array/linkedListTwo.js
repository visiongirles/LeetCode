const { assert } = require('console');

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

function ListNode(val, next) {
  val = val === undefined ? 0 : val;
  next = next === undefined ? null : next;
  return { val, next };
}
// let a = {val:2, next: {val: 4, next: {}}}
let l1 = ListNode(9, ListNode(9));
let l2 = ListNode(8);

let addTwoNumbers = function (l1, l2) {
  let head1 = l1;
  let head2 = l2;
  let answer = head1;
  let remainder = 0;

  function checkTheSum(value1, value2, outsideRemainder) {
    let insideRemainder = outsideRemainder;
    let answer = 0;
    let sum = value1 + value2 + insideRemainder;
    if (Math.floor(sum / 10) > 0) {
      insideRemainder = 1;
      answer = sum % 10;
    } else {
      insideRemainder = 0;
      answer = sum;
    }
    return [answer, insideRemainder];
  }

  while (head1.next != null && head2.next != null) {
    head1.val, (remainder = checkTheSum(head1.val, head2.val, remainder));
    head1 = head1.next;
    head2 = head2.next;
  }

  while (head2.next != null) {
    head1.val, (remainder = checkTheSum(0, head2.val, remainder));
    head1.next = head2;
    head2 = head2.next;
    head1 = head1.next;
  }

  while (head1.next != null) {
    head1.val, (remainder = checkTheSum(0, head2.val, remainder));
    head1 = head1.next;
  }

  while (remainder > 0) {
    head1.next = ListNode(remainder);
    remainder = 0;
  }

  while (head1.next != null && head2.next != null) {
    let sum = head1.val + head2.val + remainder;
    if (Math.floor(sum / 10) > 0) {
      remainder = 1;
      head1.val = sum % 10;
    } else {
      remainder = 0;
      head1.val = sum;
    }
    head1 = head1.next;
    head2 = head2.next;
  }

  while (head2.next != null) {
    let sum = head2.val + remainder;
    if (Math.floor(sum / 10) > 0) {
      remainder = 1;
      head2.val = sum % 10;
    } else {
      remainder = 0;
      head2.val = sum;
    }
    head1.next = head2;
    head2 = head2.next;
    head1 = head1.next;
  }

  while (head1.next != null) {
    let sum = head1.val + remainder;
    if (Math.floor(sum / 10) > 0) {
      remainder = 1;
      head1.val = sum % 10;
    } else {
      remainder = 0;
      head1.val = sum;
    }
    head1 = head1.next;
  }

  while (remainder > 0) {
    head1.next = ListNode(remainder);
    remainder = 0;
  }
  return answer;
};

console.log(addTwoNumbers(l1, l2));
