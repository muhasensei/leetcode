const Node = require('./Node.js');

class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const addedNode = new Node(data, null);
    if (!this.head) {
      this.head = addedNode;
    }
    if (this.tail) {
      this.tail.next = addedNode;
    }
    this.tail = addedNode;
  }

  prepend(data) {
    const addedNode = new Node(data, this.head);
    this.head = addedNode;
    if (!this.tail) {
      this.tail = addedNode;
    }
  }

  insertAfter(after, data) {
    const afterThisNode = this.find(after);
    if (!afterThisNode) {
      return;
    }
    afterThisNode.next = new Node(data, afterThisNode.next);
  }

  removeHead() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeTail() {
    if(!this.tail) {
      return;
    }

    let currentNode = this.head;
    let nodeBeforeTail = null;
    while(currentNode) {
      if(currentNode.next === this.tail) {
        nodeBeforeTail = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    nodeBeforeTail.next = null;
    this.tail = nodeBeforeTail;
  }

  remove(data) {
    if(!this.head) {
      return;
    }

    if (this.head && this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let nodeBeforeDeletedNode = null;
    while(currentNode.next) {
      if(currentNode.next.data === data) {
        nodeBeforeDeletedNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }

    if(this.tail.data === data) {
      this.tail = nodeBeforeDeletedNode;
    }
    nodeBeforeDeletedNode.next = nodeBeforeDeletedNode.next.next;
  }

  find(data) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  printAll() {
    let currentNode = this.head;
    while(currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }

  createCycle(to) {
    this.tail.next = this.find(to);
  }
}

module.exports = LinkedList;


const list = new LinkedList();
list.prepend('Third node')
list.append('First')
list.append('Should be a tail node')
// const foundNode = list.find('First')
// console.log(foundNode);
// list.insertAfter('First', 'After first')
// list.removeHead();
// list.removeTail();
list.remove('Should be a tail node')
list.printAll();