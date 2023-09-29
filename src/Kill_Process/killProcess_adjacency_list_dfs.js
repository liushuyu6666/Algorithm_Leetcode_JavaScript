// time:   128 ms
// memory: 56.5 MB
function killProcess_adjacency_list_dfs(pid, ppid, kill) {
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

    const kills = [];

    const dfs = (currId) => {
        kills.push(currId);
        if(adjList[currId]) {
            adjList[currId].forEach((id) => dfs(id));
        }
    }

    dfs(kill);

    return kills;
}