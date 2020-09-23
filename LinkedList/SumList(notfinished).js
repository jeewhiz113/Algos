
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
  //You have two numbers represented by a linkedlist, where each node contains a single digit.  The digits are stored in reverse order, such that the 1's digit is at the head of the list.  Write a function that adds the two numbers and returns the sum as a linkedlist. (use recursion!)
}
function SumList(l1, l2){
  var result = "";
  var l1Current = l1;
  var l2Current = l2;
  while(l1Current != null || l2Current != null){
    if (l1Current != null && l2Current != null){
      l1Current.value + l2Current.value
    }
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