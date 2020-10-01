
class Node{
  constructor(next=null){  //a node takes a value and a next pointer, it is by default null.
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
}

/*
Problem: Write code to partition a linked list around a value x, such thtat all nodes less than x come before al nodes greater than or equal to x.  If x is contained within the list, the value of x only need to be after the elements less than x.  The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and righr partition.

Solution 1: We simply create buffer for two new linked list and iterate through the original ll and for elements less than x and greater than or equal to x, put them all in the respective LL.

*/

function partition(ll, pValue){
  var LinkedListLeft = new LinkedList();
  var LinkedListRight = new LinkedList();
  var leftHead = LinkedListLeft.head;  //Set the head and end pointers of the two new LL to null.
  var leftEnd = linkedListLeft.head;
  var rightHead = LinkedListRight.head;
  var rightEnd = linkedListRight.head;
  var node = ll.head;
  while (node != null){
    var next = node.next; // keep a pointer to the next node
    node.next = null; //set the current node's next pointer to null.  Then we can assign the current node to either the left LL or the right LL
    if (node.value < pValue){
      if (leftHead == null){ //initially, set leftHead to be the first node and then leftEnd to be leftHead
        leftHead = node;
        leftEnd = leftHead;
      }else {
        leftEnd.next = node;  //the next pointer of the previously last node points to the current node.
        leftEnd = node;
      }
    }else { //case when the value of the node is >= to pValue
      if (rightHead == null){ //initialize the right LL
        rightHead = node;
        rightEnd = rightHead;
      }else {
        rightHead.next = node;
        rightEnd = node;
      }
    }
    node = next;  //move node along to the next node in the original list.
  }
  //In case the left partition is empty:
  if (leftHead == null){
    return rightHead;
  }
  leftEnd.next = rightHead;
  return leftEnd;
}

/*
Test out the partition with some LL.

*/