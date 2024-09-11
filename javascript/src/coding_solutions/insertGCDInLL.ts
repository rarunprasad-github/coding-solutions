import { ListNode } from './model/listNode'

export function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let currentNode = head;
  while (currentNode && currentNode.next) {
    const currentValue = currentNode.val
    const nextValue = currentNode.next.val

    const currentGCD = gcd(currentValue, nextValue);
    const newNode = new ListNode(currentGCD, currentNode.next);
    currentNode.next = newNode;
    currentNode = newNode.next;
  }
  return head;
};

function gcd(a: number, b: number): number {

  let largerNumber: number;
  let smallerNumber: number;

  if ( a > b) {
    largerNumber = a;
    smallerNumber = b;
  } else {
    largerNumber = b;
    smallerNumber = a;
  }

  // Euclidean algorithm
  while (smallerNumber !== 0) {
      const temp = smallerNumber;
      smallerNumber = largerNumber % smallerNumber;
      largerNumber = temp;
  }

  return largerNumber;
}