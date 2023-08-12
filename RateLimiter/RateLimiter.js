class RateLimiter {
    constructor(interval, times) {
        this.interval = interval;
        this.times = times;
        this.requests = new Map();
    }

    allowRequest(userId) {
        const currTime = new Date();

        if(!this.requests.has(userId)) {
            this.requests.set(userId, [{requestTime: currTime, cnt: 1}]);
            return true;
        }

        const requestHistory = this.requests.get(userId);
        const windowStart = currTime - this.interval;

        while(requestHistory > 0 && requestHistory[0].requestTime < windowStart) {
            requestHistory.shift();
        }

        const count = requestHistory.reduce((acc, ele) => ele.cnt + acc, 0);

        if(count < this.times) {
            requestHistory.push({requestTime: currTime, cnt: 1});
            return true;
        } else {
            return false;
        }

    }
}


// example
// const rateLimiter = new RateLimiter(10000, 3);

// for(let i = 0; i < 10; i++) {
//     if(rateLimiter.allowRequest("user1")) {
//         console.log(1);
//     } else {
//         console.log(0);
//     }
// }