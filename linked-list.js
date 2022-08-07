class Node {
  constructor(datum) {
    this.datum = datum;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(datum) {
    if (this.head === null) this.head = new Node(datum);
    else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(datum);
    }
  }
  prepend(x) {
    let temp = this.head;
    this.head = new Node(x);
    this.head.next = temp;
  }
}
