/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val)

    if (this.first === null) {
      this.first = newNode
      this.last = newNode
      this.size += 1
      return
    }

    let traversalNode = this.first
    while ( traversalNode.next !== null) {
      traversalNode = traversalNode.next // its traversing through an already layed out link of nexts, until it hits null and rest of code is going to great a new link. its just a way of a value to traverse through an already established link become the same assigned value as a link. I guess
      //then, because its essentially a copy of the node, then .next works on both the node and the traversal
    }

    traversalNode.next = newNode
    this.last = newNode
    this.size +=1
    return undefined
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    
    try {
      if (this.first === null) {
        throw error
      }
    }
    catch(err) {
      console.log("error")
    }

    let traversalNode = this.first
    while (traversalNode.next !== this.last){
      traversalNode = traversalNode.next
    }
    traversalNode.next = null // important otherwise, this last will just point to the second last node. null is the true eraser
    this.last = traversalNode //
    this.size -= 1
    return traversalNode.val
    
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.first === null) {
      return true
    }
    return false
  }
}


newStack = new Stack()
newStack.push(5)
newStack.push(15)
newStack.push(25)
newStack.pop()
newStack.peek()


/// THERES FURTHER STUDY AND HACKER RANK CHALLENGES


module.exports = Stack;
