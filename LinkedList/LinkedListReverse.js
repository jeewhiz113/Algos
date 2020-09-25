
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
  //Given a linked list, reverse all of its elements using a buffer
  reverseList(){
    var ll = new LinkedList();
    var current = this.head;
    while(current != null){ 
      var node = new Node(current.value);  //make a node with current value.
      node.next = ll.head;  //this node's next pointer points at the head of the new linked list, which is correct since this would be pointed at the original head of the LL.
      ll.head = node;  //now point head BACK to the newly made node.
      current = current.next;  //move current to the next node.
    }
    return ll;
  } 
  //Now we wish to reverse the LL in place!
  inPlaceReversal(){
    
  }
}


//Implementations:
var ll = new LinkedList();  
// adding element to the list 
ll.add(10);  
// prints 10 
ll.printList(); 
// adding more elements to the list 
ll.add(20); 
ll.add(50); 
ll.add(30); 
ll.add(20); 
ll.add(10);  
ll.add(40); 
ll.add(30);
ll.add(50); 
ll.printList();
var llreverse = ll.reverseList();
llreverse.printList();