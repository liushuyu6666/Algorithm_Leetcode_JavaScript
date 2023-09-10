export function countComponents_adjacencyList(n, edges) {
    // Assemble the adjacency list and visited list
    const adjacencyList = new Map();
    const visited = [];
    for(let i = 0; i < n; i++) {
        adjacencyList.set(i, []);
        visited[i] = false;
    }

    for(let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        adjacencyList.get(edge[0]).push(edge[1]);
        adjacencyList.get(edge[1]).push(edge[0]);
    }

    let cnt = 0;
    for(const [startIdx, _] of adjacencyList) {
        if(validateAndRemoteStartIdx(adjacencyList, visited, startIdx)) cnt++;
    }

    return cnt;
}

function validateAndRemoteStartIdx(adjacencyList, visited, startIdx) {
    if(visited[startIdx]) return false;
    visited[startIdx] = true;
    const list = adjacencyList.get(startIdx);
    for(const ele of list) {
        validateAndRemoteStartIdx(adjacencyList, visited, ele);
    }    
    return true;
}