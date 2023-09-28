export function minSkips1(dist, speed, hoursBefore) {
    const esp = 0.0000001;
    const x = dist.length;
    let dp1 = new Array(x);
    let dp2 = new Array(x);
    dp1.fill(0, 0);

    for(let i = 1; i < x; i++) {
        // the i-th road
        for(let j = 0; j < x; j++) {
            // skip j times
            const currTime = dist[i - 1] / speed;
            if(j === 0) {
                // no skip
                dp2[j] = Math.ceil(dp1[j] + currTime - esp);
            } else if (j <= i){
                // skip from once to every time
                const skipIsTrue = dp1[j - 1] === -1 ? Number.MAX_VALUE : dp1[j - 1] + currTime;
                const skipIsFalse = dp1[j] === -1 ? Number.MAX_VALUE : Math.ceil(dp1[j] + currTime - esp);
                // Caveat: should assign the Number.MAX_VALUE to skipIsTrue or skipIsFalse, otherwise, dp2[j] = Math.min() cannot work
                dp2[j] = Math.min(skipIsFalse, skipIsTrue);
            } else {
                // we cannot skip more than i times
                dp2[j] = -1;
            }
        }
        dp1 = dp2;
        dp2 = new Array(x) // Caveat: should initialize a new array.
    }

    const timeInLastDist = dist[x - 1] / speed;
    const maxTimeBeforeLastDist = hoursBefore - timeInLastDist;

    for(let j = 0; j < x; j++) {
        if(dp1[j] !== -1 && dp1[j] - esp <= maxTimeBeforeLastDist) return j;
    }

    return -1;
}