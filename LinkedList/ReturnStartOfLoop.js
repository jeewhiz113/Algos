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

//Problem:  Given a circular linked list, return the node at the start of the loop.
/*
  Solution: Apply the fast and slow runner technique.  Assume slow runner enters the looped portion after k steps, then fast runner is k steps into the loop.  Now we know the following:
  1. slowrunner is 0 steps into the loop.
  2. fast runner is k steps into the loop.
  3. slowrunner is k steps behind fast runner.
  4. fast runner is LOOP_SIZE - K steps behind slow runner.

  Here is the important observation: fast runner catches up at 1 step per unit of time, and fast runner is LOOP_SIZE - K steps behind slow runner, so they both meet after LOOPSIZE - K steps.  At this point, slowrunner have traveled LOOP_SIZE-K steps into the loop and since slowrunner started at the start of the loop, slowrunner (and fastrunner) are now K steps from the start of the loop.  Now recall K is the steps from the start of the LL to the start of the loop.

  Conclusion: when both pointers meet, they are K away from the start of the loop.  So if we keep a pointer at the collision-node and a pointer at the start of the LL, and walk them node by node, the pointer at which they both are pointing at the same node is the start of the loop.  Now we simply return such node.
*/

function findBeginning(ll){
  var slow = ll.head;
  var fast = ll.head;
  //identify the point of collision:
  while(fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast){
      //found the collision point:
      break;  //get out of the while loop;
    }
  }
  if (fast == null || fast.next == null){
    return null; //no loop;
  }
  //At this point, we know fast and slow are pointing at the same node;
  slow = ll.head;
  while (slow != fast){  //move both pointers along and when they meet, that the is node of intersection.
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}

//Test the above algo.
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
ll.connectTo(88);
console.log(findBeginning(ll).value);