// Write a stack class. Once you're done, implement a queue using two stacks.

class Stack {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }
}

class Queue {
  constructor() {
    this.q = new Stack();
  }
  enqueue(item) {
    this.q.inbox.push(item);
  }

  dequeue() {
    if (!this.q.outbox.length) {
      while (this.q.inbox.length) {
        this.q.outbox.push(this.q.inbox.pop());
      }
    }
    return this.q.outbox.pop();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
const val1 = queue.dequeue();
const val2 = queue.dequeue();
const val3 = queue.dequeue();
const val4 = queue.dequeue();
const val5 = queue.dequeue();
const val6 = queue.dequeue();
console.log(val1, val2, val3, val4, val5, val6);