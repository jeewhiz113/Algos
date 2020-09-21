/*
So we note from the binarysearchtree.js file, we concluded that insertion into a BST is still O(H) and not the O(LogN) that we want.  The difference here being if we have a vanilla BST, then we reallistically have a linked list, which makes finding the proper palce to insert an O(N) logarithm.  

So here comes the notion of a Balanced BST:
Definition: A tree is balanced if its height = Theta(Log N).  So this means the height of the tree, in relations to the number of nodes grow logarithmically. 

The height of a binary search tree is the length of the longest path from the root to some leaf.

The height of a specific node is the length of the longest path from the node to some leaf.

-Algorithmically, height of a node = max{height(left child), height(right child)} + 1.
-We define null pointers to have height -1.  Therefore, leaves have height 0, as the following pictures explains:
(assume the node 76 is a leave)

          76
      /        \
    null(-1) null(-1)
So the height of the node 76 is max {-1, -1} = -1 and then add 1 and we get 0.

So the idea here is augment each node with its height, and when it gets too big, fix it.

AVL trees:
require the heights of left and right children of EVERY node to differ by at most +-1, meaning for each node, the left and right side subtrees are more or less equal in HEIGHT.

Theorem: AVL trees are balanced.
   Before writing a formal proof, let's think about the worst case scenario for an AVL tree, meaning given N nodes, how do I make the tree as tall as possible but still retain the AVL property.  (least balanced situation for avl trees)
   Worst case is when the right (or left) subtree has height 1 more than the left for every node.  (Look up a picture on the web)

   Proof: We define N(h) = min # nodes in an AVL tree of height h.  So N(h) tells us given a height h, what is the least number of nodes this tree has to have and still keep the AVL property.
   
   Now to satisfy the AVL property, for a height h, we have to have 2^H nodes ideally.

   We analyze this recursively.
   N(h) = 1 + N(h-1) + N(h-2);
   Why? the min number of nodes in an avl tree of height h is precisely the root node + the min number of nodes in the right subtree + the number of nodes in the left subtree.

   Let's solve the recurrence above:
   And the recurrence looks like Fibonacci and Fibonacci is exponential, in fact N(h) > Fib(h).  The formula after some math is: height of an AVL tree < 1.44 * Log N !  Which means, given N nodes, if we have an AVL tree its height Theta(Log N), which is precisely the definition of balance.

*************

Now AVL operations:
1.  Insert:  a. Simple BST insert.
             b. fix AVL property.
              -left rotations/right rotations and or combinations of them up the tree to force the avl property back onto the tree.  (Some number of steps here to review)
        
2. AVL sort:
  - Insert n items O(N*LogN)
  - in-order traversal O(N)
*/