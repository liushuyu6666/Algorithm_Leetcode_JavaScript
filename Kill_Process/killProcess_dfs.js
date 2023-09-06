function killProcess1(pid, ppid, kill) {
    const P2P = new Map();
    for(let i = 0; i < pid.length; i++) {
        P2P.set(pid[i], ppid[i]);
    }

    const map = new Map();

    const killedProcesses = [];
    for(const currPid of pid) {
        if(toBeKilled(kill, currPid, map, P2P)) {
            killedProcesses.push(currPid);
        }
    }

    return killedProcesses;
}

/**
 * 
 * @param {*} kill The ID of the process to be killed.
 * @param {*} currPid The ID of the current process being examined.
 * @param {*} map A map to keep track of processes that need to be killed.
 * @param {*} P2P A mapping of process ID (pid) to its parent process ID (ppid).
 * @returns 
 */
function toBeKilled(kill, currPid, map, P2P) {
    if(map.has(currPid)) return map.get(currPid);

    const pid = P2P.get(currPid);
    if(currPid === kill) {
        // If the current process is the one that need to be killed
        map.set(currPid, true);
        return true;
    } else if(pid === 0) {
        // Check if the current process is the root process
        map.set(currPid, false);
        return false;
    } else {
        const toKill = toBeKilled(kill, pid, map, P2P);
        map.set(currPid, toKill);
        return toKill;
    }
}
