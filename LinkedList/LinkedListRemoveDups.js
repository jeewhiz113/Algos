
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
  //2.1: write code to remove all duplicates from a linked list.  (No buffer allowed, so no hashtable)
  //This is constant O(n^2) time complexity and O(1) space complexity.
  removeDups(){ //assume this is of none trivial length.
    //implement two pointers, one points at current element and the other run ahead to delete dups
    if (this.head == null){
      return
    }
    //Have a current, and then have a runner, if next element from runner is the same as current value, then move runner's next pointer, which is currently pointing at current, to skip over the next node; runner.next = runner.next.next, otherwise, runner = runner.next.  Keep doing this for as long as runner.next is not null.
    var current = this.head;
    while(current != null){
      var runner = current;
      while(runner.next != null){
        if (runner.next.value == current.value){
          runner.next = runner.next.next;  //Important to note here is that runner is sufficient to move the pointers to the proper places, current is just here to check 
        }else { 
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }
  //A faster solution but with a O(N) space complexity:  We keep elements we have seen in a set, now we ahve constant lookup on a set, so we simply traverse the array and deleting the node with previously seen values (Remember the aglo!)
  removeDupsFast(){
    if (this.head == null){
      return
    }
    var previous = null;
    var current = this.head;
    var set = new Set();
    while (current != null){
      if (set.has(current.value)){
        previous.next = current.next;
      }else {
        set.add(current.value);
        previous = current;
      }
      current = current.next;
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
// returns 10 20 30 40 50 
ll.printList(); 
ll.removeDupsFast();  
ll.printList(); 
//remov