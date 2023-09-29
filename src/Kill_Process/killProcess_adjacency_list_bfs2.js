// time:   132 ms
// memory: 55.5 MB
function killProcess_adjacency_list_bfs2(pid, ppid, kill) {
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

    let i = 0;
    while(i < queue.length) {
        const parent = queue[i];
        if(adjList[parent]) {
            adjList[parent].forEach((id) => {
                kills.push(id);
                queue.push(id);
            })
        }
        i++;
    }

    return kills;
}
