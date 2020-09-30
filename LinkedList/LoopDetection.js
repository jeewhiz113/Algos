class Node{
  constructor(value, next=null){  //a node takes a value and a next pointer, it is by default null.
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(){
    this.head = null;  
  }
  add(value){
    var node = new Node(value);
    var current;
    if (this.head == null){
      this.head = node;
    }else {
      current = this.head; //get current to point to the start of the linked list
      while(current.next){
        current = current.next;
      } //When the while loop finishes, current is pointing at the last node.
      current.next = node;  //get the next pointer to point at the newly created node.
    }
  };
  remove(value){  //assume head is not null
    if (this.head.value == value){
      this.head = this.head.next;
    }
    var current = this.head;
    while(current.next != null){  //search for the next value and see if it matches
      if (current.next.value == value){
        current.next = current.next.next;
        //console.log('found it!')
      }
      current = current.next;
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
  connectTo(location){
    var current = this.head;
    while(current.next != null){
      current = current.next;
    }
    var locationPointer = this.head;
    for (var i = 0; i < location; i++){
      locationPointer = locationPointer.next;
    }
    current.next = locationPointer;
  }
}

//Write a function to see if a LL contains a loop.
/*
Solution: If we use the fast and slow runner technique, a moments thought will convince us that if a loop exists, the they will land on the same node.  If the LL is looped, then fast runner will catch up to slow runner in the loop we know for sure before the slow runner traverses half the loop.  imagine fast runner is 1 behind slow, then they both land of the same spot after 1 iteration.
*/

function loopDetect(ll){
  var slow = ll.head;
  var fast = ll.head;
  while (fast.next != null){
    slow = slow.next;
    fast = fast.next.next; //There is an issue here!
    if (slow == fast){
      return true;
    }
  }
  return false;
}

var ll = new LinkedList();
ll.add(10);  
ll.add(20); 
ll.add(50); 
ll.add(30); 
ll.add(30); 
ll.add(50);  
ll.add(20); 
ll.add(10);
ll.add(20); 
ll.add(50); 
ll.add(30); 
ll.add(30); 
ll.add(50);  
ll.add(20); 
ll.add(10);
ll.add(20); 
ll.add(50); 
ll.add(30); 
ll.add(30); 
ll.add(50);  
ll.add(20); 
ll.add(10);
ll.add(20); 
ll.add(50); 
ll.add(30); 
ll.add(30); 
ll.add(50);  
ll.add(20); 
ll.add(10);
ll.connectTo(12);
console.log(loopDetect(ll));