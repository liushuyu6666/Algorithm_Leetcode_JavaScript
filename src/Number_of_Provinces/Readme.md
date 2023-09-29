# Algorithms
## Union Find
Key Components of the Union-Find:
1. Properties:
   1. father Array: Initially records the parent of each element. Over time, it gets updated to store the ancestor of the element.
   2. depths Array: Stores the depth of each branch.
2. `find` function: Determines the ancestor of a given element and updates the ancestor of all elements along the path to that ancestor.
3. `merge` function: Combines one branch with another.

## DFS

## BFS

# Caveats
## Infinite loops
When using the Breadth-First Search (BFS) algorithm to solve this question, remember not to add any previously visited city to the queue.