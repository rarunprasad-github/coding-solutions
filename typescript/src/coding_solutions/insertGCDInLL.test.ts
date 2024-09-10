import { ListNode } from './model/listNode';
import { insertGreatestCommonDivisors } from './insertGCDInLL'; // Update this path accordingly

// Helper function to create a linked list from an array of values
function createLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) return null;

  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert a linked list to an array of values
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('insertGreatestCommonDivisors', () => {
  it('should correctly insert GCD nodes into the linked list', () => {
    // Test case 1
    const inputList = createLinkedList([24, 36, 48, 60]);
    const expectedOutput = [24, 12, 36, 12, 48, 12, 60];
    const result = insertGreatestCommonDivisors(inputList);
    expect(linkedListToArray(result)).toEqual(expectedOutput);

    // Test case 2
    const inputList2 = createLinkedList([10, 5]);
    const expectedOutput2 = [10, 5, 5];
    const result2 = insertGreatestCommonDivisors(inputList2);
    expect(linkedListToArray(result2)).toEqual(expectedOutput2);

    // Test case 3
    const inputList3 = createLinkedList([7, 14, 21]);
    const expectedOutput3 = [7, 7, 14, 7, 21];
    const result3 = insertGreatestCommonDivisors(inputList3);
    expect(linkedListToArray(result3)).toEqual(expectedOutput3);

    // Test case 4: Empty list
    const inputList4 = createLinkedList([]);
    const expectedOutput4: number[] = [];
    const result4 = insertGreatestCommonDivisors(inputList4);
    expect(linkedListToArray(result4)).toEqual(expectedOutput4);

    // Test case 5: List with a single node
    const inputList5 = createLinkedList([5]);
    const expectedOutput5 = [5];
    const result5 = insertGreatestCommonDivisors(inputList5);
    expect(linkedListToArray(result5)).toEqual(expectedOutput5);

    const inputList6 = createLinkedList([1, 2, 3]);
    const expectedOutput6 = [1, 1, 2, 1, 3];
    const result6 = insertGreatestCommonDivisors(inputList6);
    expect(linkedListToArray(result6)).toEqual(expectedOutput6);
  });
});
