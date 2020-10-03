/*
So to implement a stack, we import the LL from linkedlist.js with the following specific operations:
1. pop() removes the element at the top of the stack.
2. push(item) adds an item to the top of the stack.
3. peek() returns the top of the stack.
4. isEmpty() returns true if the stack is empty.
Note we would have a head pointer pointing at the most recently added item!!
*/

class Node{
  constructor(value, next=null){  //a node takes a value and a next pointer, it is by default null.
    this.value = value;
    this.next = next;
  }
}

class Stack{
  constructor(start = null, end = null){
    this.start = start;
    this.end = end;
  } 

  push(value){
    var node = new Node(value);
    if (this.start == null){
      this.head = node;
      this.end = node;
    }else {
      node.next = this.head;
      this.head = node;
    }
  }
  printList(){
    var current = this.head;
    var str = "";
    while(current){
      str += current.value + " ";
      current = current.next;
    }
    console.log(str);
  }
}

var stack = new Stack();  
// adding element to the list 
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);

stack.printList();