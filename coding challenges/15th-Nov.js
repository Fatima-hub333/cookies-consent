// [Linked List]

// Solution in Ruby
if (head == null) {
  return new Node(data);
}
var pointingNode = head;
while (pointingNode.next != null) {
  lastNode = lastNode.next;
}

lastNode.next = new Node(data);
return head;