/*
So to implement a stack, we import the LL from linkedlist.js with the following specific operations:
1. pop() removes the element at the top of the stack.
2. push(item) adds an item to the top of the stack.
3. peek() returns the top of the stack.
4. isEmpty() returns true if the stack is empty.
Note we would have a head pointer pointing at the most recently added item!!
*/

class Node{
  constructor(value, minUnder=null, next=null){  //a node takes a value and a next pointer, it is by default null.
    this.value = value;
    this.next = next;
    this.minUnder = minUnder;
  }
}

class Stack{
  constructor(start = null, end = null){
    this.start = start;
    this.end = end;
  } 

  push(value){
    //var node = new Node(value, value);
    if (this.start == null){
      var node = new Node(value, value);
      this.start = node;
      this.end = node;
    }else {
      var currentMin = this.start.minUnder;

      if (currentMin < value){
        var node = new Node(value, currentMin);
        node.next = this.start;
        this.start = node;
      }else {
        var node = new Node(value, value);
        node.next = this.start;
        this.start = node;
      }
    }
  }
  //Now write the getMin and peek function.
  peek(){
    var topElement = this.start;
    return topElement;
  }
  pop(){
    var topElement = this.start;
    this.start = this.start.next;
    return topElement;
  }


  printList(){
    var current = this.start;
    var str = "";
    while(current){
      str += current.value + " ";
      current = current.next;
    }
    console.log(str);
  }

  //Now construct a method to return the min of a LL, and such method should run at constant time.
  //Solution: We simply add to each node another variable that keeps track of what the min element below itself is.

  //Try another solution, try creating a second stack to keep track of the smallest element of this stack within this stack.
}

var stack = new Stack();  
// adding element to the list 
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
stack.push(11);

stack.printList();
/* console.log(stack.pop().value);
stack.printList(); */
console.log(stack.peek().minUnder);