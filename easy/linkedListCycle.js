const LinkedList = require('../data-stuctures/LinkedList');
/* brute solution

const hasCycle = function (head) {
  if (!head.next) {
    return false;
  }
  let currentNode = head;
  const visited = [];
  while(currentNode) {
    if(visited.includes(currentNode)) {
      return true;
    }
    visited.push(currentNode)
    currentNode = currentNode.next;
  }
  return false;
}
*/


const hasCycle = function (head) { // better solution
  let fastPointer = head;
  let slowPointer = head;
  while(fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if(fastPointer === slowPointer) {
      return true;
    }
  }
  return false;
}



const list = new LinkedList();
list.append(1);
list.append(0);
list.append(-5);
list.append(21);
list.createCycle(0)

console.log(hasCycle(list.head))

