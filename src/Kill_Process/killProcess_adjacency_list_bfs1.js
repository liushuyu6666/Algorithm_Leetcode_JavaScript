// time:   3020 ms
// memory: 55.5 MB
function killProcess_adjacency_list_bfs1(pid, ppid, kill) {
    // Create an adjacency list
    const adjList = {};
    for(let i = 0; i < pid.length; i++) {
        const currId = pid[i];
        const parentId = ppid[i];
        if(!adjList[parentId]) {
            adjList[parentId] = [currId];
        } else {
            adjList[parentId].push(currId);
        }
    }

    let kills = [kill];
    let queue = [kill];

    while(queue.length > 0) {
        const parent = queue.shift();
        if(adjList[parent]) {
            adjList[parent].forEach((id) => {
                kills.push(id);
                queue.push(id);
            })
        }
    }

    return kills;
}

