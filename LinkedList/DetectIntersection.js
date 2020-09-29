
class Node{
  constructor(value, next=null){  //a node takes a value and a next pointer, it is by default null.
    this.value = value;
    this.next = next;
  }
}
//declare a new object to store the  pointer and value of the last node:
class Last {
  constructor(pointer=null, size=0){
    this.tail = pointer;
    this.size = size;
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
  //Given two LLs, determine if the two lists intersect.  Return the intersecting node.  For example:
  /*
    3->1->5->9->7->2->1
    4->6->->7->2->1
    The function should return the variable pointing at the node 7.  (note that insertion means pointer references.)

    One approach would just be use a set and throw all the pointers in one LL in and walk through another LL and return the first one that matches, cause once one pointer matches, the rest of the LL would have to match.  This approach takes O(N) time.

    Another approach would be to determine the lengths of the two LLs.  Now if this was given to us, then we simply need to chop off the initial part of the longer LL and walk along with the other LL and compare their pointers, if we have a match then we are done and return such pointer.

    If the length was not given to us, then we have to do a bit more work and walk along the two LLs to find the lengths.
  */
  
}

function getTailandSize(ll){
  var current = ll.head;
  
  if (current == null){
    return;
  }
  var size =1;
  while (current.next != null){
    current = current.next;
    size++;
  }
  return new Last(current, size);
};

function findIntersect(ll1, ll2){
  var last1 = getTailandSize(ll1);
  var last2 = getTailandSize(ll2);
  if (last1.tail != last2.tail){  //if the tails are pointing at different nodes, then no intersecting nodes.
    return null;
  }
  //case when tails are pointer at the same nodes.
  if (last1.size == last2.size){
    return walkAndFindIntersect(ll1.head, ll2.head);
  }else if (last1.size > last2.size){
    var difference = last1.size - last2.size;
    var current = ll1.head;
    for (var i = 1; i <= difference; i++){
      current = current.next;;
    }
    return walkAndFindIntersect(current, ll2.head);
  }else if (last2.size > last1.size){
    var difference = last2.size - last1.size;
    var current = ll2.head;
    for (var i = 1; i <= difference; i++){
      current = current.next;
    }
    return walkAndFindIntersect(ll1.head, current);
  }
  
}

function walkAndFindIntersect(node1, node2){
  while (node1 != null && node2 != null){
    if (node1 == node2){
      return node1;
    }else {
      node1 = node1.next;
      node2 = node2.next;
    }
  }
}

var ll1= new LinkedList();  
var ll2 = new LinkedList();
// adding element to the list 
ll1.add(10);  
// prints 10 

// adding more elements to the list 
ll1.add(20); 
ll1.add(50); 
ll1.add(30); 
ll1.add(20); 
ll1.add(10);  
ll1.add(40); 
ll1.add(30);
ll1.add(50); 

ll2.add(80);
ll2.add(10);
ll2.add(20);
ll2.add(30);
ll2.add(40);
ll2.add(90);
var tailPointer = getTailandSize(ll2);
tailPointer.tail.next = ll1.head;


var intersect = findIntersect(ll1, ll2);
console.log(intersect.value);
