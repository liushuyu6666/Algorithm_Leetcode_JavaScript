// time: 60ms
// memory: 42 MB
function findCircleNum2(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);

    let provinces = 0;
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            provinces++;
            dfs(i, isConnected, visited);
        }
    }

    return provinces;
}

function dfs(x, isConnected, visited) {
    if(visited[x]) return;

    visited[x] = true;
    const connected = isConnected[x];

    for(let i = 0; i < connected.length; i++) {
        if(connected[i] === 1) {
            dfs(i, isConnected, visited);
        }
    }

    return;
}
