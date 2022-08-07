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
    if (this.head === null) return size;
    else {
      let temp = this.head;
      size = 1;
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
    if (index === 0) return this.head;
    if (index > this.size()) return 'Not found';
    let temp = this.head;
    while (count < index) {
      ++count;
      temp = temp.next;
    }
    return temp;
  }
  contains(x) {
    if (this.head != null) {
      let temp = this.head;
      while (temp !== null) {
        if (temp.datum === x) return true;
        temp = temp.next;
      }
    }
    return false;
  }
  toString() {
    let print = '';
    if (this.head !== null) {
      let temp = this.head;
      while (temp !== null) {
        if (temp !== null) print += ` (${temp.datum}) ->`;
        temp = temp.next;
      }
      console.log(print);
    } else console.log('List is empty');
  }
  insertAt(x, index) {
    if (index < 0) return console.log('Enter a valid index');
    if (index > this.size()) return console.log('Index greater than list-size');
    if (index === 0) this.prepend(x);
    else if (index === 1) {
      let temp = this.head;
      let insert = this.head.next;
      temp.next = new Node(x);
      temp.next.next = insert;
    } else {
      let temp = this.head;
      let i = 0;
      let cur = temp;
      let prev = temp;
      while (i !== index - 1 && temp !== null) {
        prev = temp;
        temp = temp.next;
        cur = temp.next;
        ++i;
      }
      if (temp == null) prev.next = new Node(x);
      else {
        temp.next = new Node(x);
        temp.next.next = cur;
      }
    }
  }
}

let testList = new LinkedList();

testList.append(1);
testList.toString();

testList.prepend(2);
testList.toString();

testList.append(12);
testList.toString();

testList.prepend(5);
testList.toString();

testList.insertAt(113, 0);
testList.toString();
