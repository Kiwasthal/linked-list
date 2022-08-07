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
  size() {
    let size = 0;
    if (head === null) return size;
    else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
        ++size;
      }
      return size;
    }
  }
  getHead() {
    return this.head;
  }
  getTail() {
    if (this.head === null) return this.head;
    else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      return temp;
    }
  }
  find(x) {
    if (this.head !== null) {
      let temp = this.head;
      while (temp !== null) {
        if (temp.datum === x) return temp;
        temp = temp.next;
      }
    } else return null;
  }
  at(index) {
    if (this.head === null) return null;
    if (index === 1) return this.head;
    let temp = this.head;
    let count = 1;
    while (count <= index) {
      ++count;
      if (temp.next === null) return 'Not found';
      temp = temp.next;
    }
    return temp;
  }
  contains(x) {
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.datum === x) return true;
      temp = temp.next;
    }
    return false;
  }
}
