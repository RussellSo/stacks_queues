//Jest use sudo npm i --global jest

/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newQueue = new Node(val)

    if (this.first === null) {
      this.first = newQueue
      return undefined;
    }

    let traversalNode = this.first
    while ( traversalNode.next !== null) {// traverses to the end of the linked list
      traversalNode = traversalNode.next
    }

    // also dont have to put an if statement since this is the last possible scenario ideally
    if ( traversalNode.next === null) {
      traversalNode.next = newQueue
      console.log(traversalNode)
    }
  }



  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // not sure if i did this right, but try will stop programming if throw is true (stops from programming shutting down and catch will show the error)
    try {
      if (this.first === null) throw Error("Queue is empy");  
      let currentNode = this.first // node to point at when choosing next
      this.first = currentNode.next
      return currentNode.val
    }
    catch(err) {
      console.log("err")
    }
    

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    // console.log(this.first)
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.first === null) {
      return true
    }
    return false
  }
}


let enEx = new Queue() 
enEx.enqueue(10)
// enEx.enqueue('kelly')
// enEx.enqueue('susan')
enEx.dequeue()
// enEx.peek()
enEx.isEmpty()
// console.log(enEx)

// i got practice on linked list.
// i got practice throwing errors, how to check return values



module.exports = Queue;
