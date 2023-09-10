# Algorithms
## Adjacency List
In contrast to the [adjacency list in this question](https://github.com/liushuyu6666/Algorithm_Leetcode_JavaScript/tree/master/Kill_Process#adjacency-list), our adjacency list requires both ends of a relation to serve as keys. Additionally, a visited array is necessary to track `visited` nodes.

Given the connectivity relationship `[[2,0],[2,1]]`:
* Using the referenced adjacency list, we obtain:
  ```text
    {
        0 -> [2],
        1 -> [2],
        2 -> [2]
    }
  ```
In this case, employing the "dfs" method results in two branches.
* However, by considering both ends of the relation, we derive:
  ```text
    {
        0 -> [2],
        1 -> [2],
        2 -> [0, 1, 2]
    }
  ```
With this approach, the "dfs" method yields only one branch.

Upon finalizing the adjacency list and the `visited` array, apply either "dfs" or "bfs" to determine the answer.

# Caveats
## Connectivity missing
Note that while the question may provide 10 nodes, the connectivity relationships might only include 9 nodes. This indicates the presence of one isolated node that only connects to itself. To account for this, ensure that you initialize the adjacency list with all nodes.

## Infinite dfs
The adjacency lists provided are bidirectional, which can potentially result in an infinite depth-first search (DFS). Consider the following example:
```javascript
function validateAndRemoteStartIdx(adjacencyList, visited, startIdx) {
    if(visited[startIdx]) return false;
    const list = adjacencyList.get(startIdx);
    for(const ele of list) {
        validateAndRemoteStartIdx(adjacencyList, visited, ele);
    }
    visited[startIdx] = true; // infinite dfs occurs
    return true;
}
```
Given the scenario `{0 => [1], 1 => [0]}`, an infinite DFS loop might occur since `visited[i] = true` is set only at the end."