
class Node{
  constructor(value, next=null){ 
    this.value = value;
    this.next = next;
  }
}

class Stack{
  constructor(capacity){  //if capacity then return false
    this.start = null;
    this.end = null;
    this.capacity = capacity;
    this.size=0;
  } 
  //check to see if stack is full
  isFull(){
    return this.size == this.capacity;
  }
  //
  push(value){
    if (this.size >= this.capacity){
      return false;
    }else {
      this.size++;
      var node = new Node(value);
      
    }
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
  //Implement a SetOfStacks class for which if the stack gets too high, we start a new stack when the previous stack exceeds some threshhold.  SetOfStacks's push and pop function should behave identically.
}

class SetOfStacks{
  constructor(){
    this.setOfStacks = [];
  }
  getLastStack(){
    if (this.setOfStacks.length == 0){
      return null;
    }else {
      return this.setOfStacks[this.setOfStacks.length -1];
    }
  }
  push(value){
    var lastStack = this.getLastStack();
    if (lastStack != null && !lastStack.isFull()){
      //lastStack is not null and lastStack is not full:
      lastStack.push(value);
    }else {
      //make a stack and push it to the setofstacks array.
      var newStack = new Stack(null, null, 10);
      newStack.push(value);
      this.setOfStacks.push(newStack);
    }
  }
  //Two pop operations: 1 is to simple pop the end of the setoftacks

  rudimentaryPop(){
    var lastStack = this.getLastStack();
    
  }


  popWithCol(){  //How does this work?  Say I pop off an element in stack 1, then one can imagine a rollover system where I remove the head element of stack 2 and push that element to the end of stack 1 and from stack 3 to 2 and 4 to 3 and so on...  This could become expensive and would take O(# of stacks in set) time.  (if we have alot of stacks.)
    //The other approach is to allow uneven stacks.  This would save time, since this would be O(1) (constant time) operation.

  }
}

var setStacks = new SetOfStacks();
setStacks.push(12);

console.log(setStacks);  //ok this seems to work!