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
  reverseList(){  //walk through the LL and construct a LL pointing backwards bascially.
    var ll = new LinkedList();
    var current = this.head;
    while(current != null){
      var node = new Node(current.value);
      node.next = ll.head;  //points the next element to the previously made node
      ll.head =node;  //head is now the new node
      current = current.next; //move current along
    }
    return ll;
  }
}
//Problem: Implement a function to check if a LL is a palindrome.
function isPalindrome(ll1){
  //idea: reverse the LL in a buffer and then compare it with the original LL.
  var reverse = ll1.reverseList();
  var l1Current = ll1.head;
  var l2Current = reverse.head;
  while(l1Current != null && l2Current != null){
    if (l1Current.value != l2Current.value){
      return false;
    }
    l1Current = l1Current.next;
    l2Current =l2Current.next;
  }
  return l1Current == null & l2Current == null;
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
console.log(isPalindrome(ll));  //true gives a value of 1
//console.log();