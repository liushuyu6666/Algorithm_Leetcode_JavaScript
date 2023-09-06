# Algorithms
## Adjacency List
One way to flatten the tree and simplify the problem is to convert the tree into an adjacency list. In this context, the adjacency list is represented as a `Map` rather than a traditional list. In this map, each node only records its direct children. For example, if we have `pid = [1,3,10,5]` and `ppid = [3,0,5,3]`, our adjacency list representation would be `adjList = {3: [1, 5], 0: [3], 5: [10]}`.

# Skill
## Avoid using Shift In JavaScript
In JavaScript arrays, the `shift` operation has a time complexity of $O(n)$ because it requires re-indexing all the elements in the array.

When comparing the execution times of `killProcess_adjacency_list_bfs1` and `killProcess_adjacency_list_bfs2`, you'll notice a difference.

