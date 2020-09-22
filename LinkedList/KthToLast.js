
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
  //2.2: Write an algorithm to return the kth to last element of a LinkedList.
  //Idea: walk to the end of the LinkedList and if k is > length of LinkedList, then walk length of LL - k nodes.
  //Another better idea: Place two pointers down and move the runner pointer k nodes down, then move both pointers simultaneously, when the runner pointer is pointing at the last node, then the current pointer is the kth to last element!  Hopefully, we recognize the importance of having two pointers!
  //This algo takes O(n) time and O(1) space.
  nthToLast(k){  //we assume the length of LL is > k
    var current = this.head;
    var runner = this.head;
    for (var i = 0; i < k; i++){
      runner = runner.next;  //run this k times.
    }
    while (runner.next != null){
      current = current.next;
      runner = runner.next;
    }
    console.log('kth to the last is ' + current.value);
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
ll.nthToLast(4);