class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
};

var partition = function (head, x) {
  if (head == null) {
    return head;
  }
  let smallerList, largerList, smallerListHead, largerListHead;
  let temp = head;

  while (temp !== null) {
    const newNode = new ListNode(temp.val, undefined);
    temp = temp.next;
    if (newNode.val < x) {
      if (smallerList !== undefined) {
        smallerList.next = newNode;
        smallerList = smallerList.next;
      } else {
        smallerList = newNode;
        smallerListHead = smallerList;
      }
    } else {
      if (largerList !== undefined) {
        largerList.next = newNode;
        largerList = largerList.next;
      } else {
        largerList = newNode;
        largerListHead = largerList;
      }
    }
  }

  if (smallerListHead !== undefined) {
    if (largerListHead !== undefined) {
      smallerList.next = largerListHead;
    }
    return smallerListHead;
  } else {
    return largerListHead;
  }

};
