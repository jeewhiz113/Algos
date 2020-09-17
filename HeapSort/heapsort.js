/*
A priority queue: is an ADT, (look up what this is?).  A heap is a specific implementation of a priority queue?  It is just a data structure that can find max, extract max, insert a value preserving its order and etc..

What is a heap?
An array visualized as a nearly complete binary tree.
Visualization Process:
The numbers represent the indices of the array
           0
         /   \
        1     2
       / \   / \
      3   4 5   6
    .....

Now a few moments of thought will show that parent of i = (i-1)/2 (integer division)
and the left child of i is (2 * i + 1) and the right child is (2 * i + 2)

Max-Heap property: The value of a node is >= the values of its children.

Now if one could solve the problem of extracting the max from this heap and still keep
its Max-Heap property, one could run this operation over and over and we'd have 
an array sorted in descending order!

So two questions: 1. given an arbitrary array, how to turn it into a max heap?
                  2. How to extract max out of the max heap and still keep the max heap property?

Operations to consider for time-complexity:

1. Build max-heap given an arbitrary array.  To accomplish building a max-heap, we consider the operation max-heapify.
   max-heapify is ran on an array A with an index i, and the precondition is that the left subtree rooted at index i (left(i)) and the right subtree rooted at index i (right(i)) are both max-heaps.  We typically denote this opeartion using an ordered pair: (A, i).

   What does max-heapify do? 
   In other words, assume we are given an array that is not quite a max-heap, but almost one, meaning it only contains 1 single violation of the max-heap property and running max-heapify will fix such violation.

   Looking ahead, if we do this recursively at different levels of the tree, then we impose the max-heap property to an array.

So for example, if we run max-heapify on the following array/tree:

            16
          /    \
         4     10
       /  \    /  \
      14   7  9    3
     / \   /
    2   8  1
         
    We run Max-Heapify (A, 1): at index 1, we see a violation.
    Now the subtree to the left and to the right are max-heaps.

    Now max-heapify will exchange 4 with the bigger of 14 and 7.  So we exchange 4 and 14. 
    So we have:
         14
        /  \
       4    7
      /\   /
     2  8  1

     Then we max-heapify (A, 4) and we exchange 4 with 8 or A[3] with A[7].

     Now what is the time complexity of max-heapify? 
     Since we have a nearly complete Binary Tree, then height of the tree is Log(N), worst case, we keep bubbling down, and the height of the tree is log(N), therefore some number of comparisons but bounded by some constant C * Log(N).  
    
Now how to use max-heapify to build max-heap? (converting an arbitrary array to a max-heap)

Algorithm:
  for (i = n/2 down to 1){
    max_heapify (A, i)
  }

  //note leaves are already max-heap so (n/2 + 1) to n are all leaves.  So visually speaking, we are working on level
  1 node and level 2 node and so on and so up to the top of the tree.

  So one quick glance says we have n nodes and each node does log(n) amount of work, therefore, the complexity of this
  algo is N*Log(N).

  

    
     */
