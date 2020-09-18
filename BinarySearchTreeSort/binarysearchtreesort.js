/*
Motivation: Assume we have an airport with a single runway:

Let R denote the set of all future landings.  

1. One can reserve a landing request to be added to R with a specified landing time t.
2. t will be added to R if no other landing times are scheduled within k minutes of t in the set of R.
3. One should be able to remove from the set of R after the plane lands (do this every 10 seconds say).

Note, let the cardinality of R be n and we wish to do all the operations mentioned above in O(logN) time.

So for example:

Now = 37 and R = {41.2, 49, 56.3}

Insertion of 53 is OK, 44 is not allowed (too close to 41.2), 20 is not allowed (past current time).

Now let's list some data structures and see if O(Log N) can be achieved using them:

Unsorted Array/List corresponding to R.  
Complexity for the three operations: adding is O(1), check if valid to add is O(n), removal of past time is O(n).

Sorted Array:
Finding the proper place to add O(LogN), check if valid to add O(1), insertion is O(N) since we need to shift the array.

Sorted List: (Structure with a pointer)
Finding the proper insertion point is O(N), check if valid is O(1), insertion is O(1)

Min/Max Heaps: (min/man Heap property is actually quite weak)

To check to see if the time is valid to add, it takes O(N) time.  This can be easily seen if we picture a min-heap and the time needs to bubble down, but do we go left or do we go right?  If we pick one direction, then we ignore the other direction, but all the nodes in the other subtree needs to be checked as well to see if the K minute apart condition.

Note that some thinking, I conclude that finding the proper place to add is Log(N), just bubble down.

Conclusion: So we note that Sorted Array got faily close to what we want, if we could do fast insertion into a sorted array, then we'd have it!

This is where the Binary Search Tree comes in (Note the BST property is fairly strong):

Let's see an example of a BST:

             30
            /  \
          17    40
          /\     
        14  20

We take note that a heap is an array visualized as a tree, a BST is actually a tree with pointers!
So for each node, you'd have a left(x) and right(x) pointers.

BST invariant property, for all nodes x, if y is in the left subtree of x, then y <= x and if y is in the right subtree of x, then y >= x.
          
Now lets think about the time complexity of the following operations:
Insertion takes O(Log N) time, simply bubble
        */  