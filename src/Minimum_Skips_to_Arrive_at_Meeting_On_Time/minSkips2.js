export function minSkips2(dist, speed, hoursBefore) {
    const x = dist.length;

    let loss1 = new Array(x);
    let loss2 = new Array(x);
    let totalThru = 0;
    loss1.fill(0, 0);

    for(let i = 1; i < x; i++) {
        // we are going to go across the i-th road
        for(let j = 0; j < x; j++) {
            if (j === 0) {
                // how many distance we lost if we never skip
                loss2[j] = calCurrLoss(speed, totalThru, loss1[j], dist[i - 1]);
            } else if (j <= i) {
                const skipIsTrue = loss1[j - 1] === -1 ? Number.MAX_VALUE : loss1[j - 1];
                const skipIsFalse = loss1[j] === -1 ? Number.MAX_VALUE : calCurrLoss(speed, totalThru, loss1[j], dist[i - 1]);
                loss2[j] = Math.min(skipIsFalse, skipIsTrue);
            } else {
                loss2[j] = -1;
            }
        }
        loss1 = loss2;
        loss2 = new Array(x);
        totalThru += dist[i - 1];
    }

    const sumDist = dist.reduce((acc, curr) => acc + curr, 0);
    const wiggleRoom = speed * hoursBefore - sumDist;

    for(let j = 0; j < x; j++) {
        if (loss1[j] !== -1 && loss1[j] <= wiggleRoom) return j;
    }

    return -1;
}

const calCurrLoss = (speed, totalThru, prevLoss, currDist) => {
    if ((totalThru + prevLoss + currDist) % speed === 0) return prevLoss;
    return speed - ((totalThru + prevLoss + currDist) % speed) + prevLoss;
}