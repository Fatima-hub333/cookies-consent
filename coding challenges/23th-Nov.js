this.removeDuplicates = function (head) {
  if (head && head.next) {
    let prev = head;
    while (prev.next) {
      if (prev.data === prev.next.data) {
        prev.next = prev.next.next;
      } else {
        prev = prev.next;
      }
    }
  }
  return head;
}

// {Running Time & complexity}