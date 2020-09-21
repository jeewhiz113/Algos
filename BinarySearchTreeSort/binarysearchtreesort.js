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

Before we do, we remind ourselves that the original problem is the single runway reservation problem and we wish to do the three operations in O(LogN) time!

We start with an empty BST and insert: (k minute check with k = 3)
Insert 49, 79, 46, 41, next we try and insert 42. Go left at 49, go left at 46 and then we would have gone right on 41, but 42 is not 3 away from 41, therefore we do not insert 42.
              49
              /\
           46   79
           /
          41

So here we note if h is the height of the BST, then insertion is done in O(h) time, which is NOT what we originally wanted, we wanted O(logN) time.

As a side note, we note some common operations and their time complexity for BST:

1. findMin() - keep going to the left so we have O(h) time. (similarly for max)
2. findNextLarger(x), so given 46, this should return 49.  This can be done in O(h) time.  HOW????????

Now we stop here and say (up to the problem of O(h) and not O(LogN)), BST solves our initial quest to finding a data structure with the specified run time.  But now we introduce a new operation: how many planes are scheduled to land at times <= t, and we wish to answer the question above with O(h) time.

We augment our BST structure by adding another datapoint to each node.  For each node x, we add a number that represents the number of nodes of the subtree of the original BST rooted in x.

              49
              /\
           46   79
           /
          41

So at root 49, we have size = 4, at node 79, we have size = 1, at node 46, we have size = 2.

This can be done fairly trivially, when we insert an element to a BST, we simple increment size by 1 along its path of insertion.  

So then to answer the question of how many planes are scheduled to land before time t?

Look at the example below:
               49
              /  \
           46     79
           /      / \
          41     64  83

And t say t = 79, so we find the number of planes scheduled to land <= 79.

Step 1: walk down the tree to find desired time,
Step 2: once a node is traversed, add 1 then add all the nodes on its left subtree.

For example, 79 > 49, so we go right but before doing so, add 1 (node at 49) and 2 (left subtree of 49).  Repeat the above 2 steps everytime we move right and do not do anything when moving left.  Keep doing so until we point to the value == t or the pointer points to null.

So if t = 79, we have 1 + 2 + 1 + 1 = 5, which is the number <= 5.

Now conclusion: we know BST now, but we still have not solved O(log N) for insertion.  Imagine, we have a degenerate BST (think of a tree that looks like a list, keeps going to the left or right, then insert takes O(n) = O(h) time since all the elements go to the left or right of the BST.)
        

*/  