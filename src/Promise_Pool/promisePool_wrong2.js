export function promisePool_wrong2(functions, n) {
    return new Promise((res) => {
        let idx = 0, cnt = 0;
        while(idx < functions.length && cnt < n) {
            const currPromise = functions[idx]();
            currPromise.then(() => {
                cnt--;
                if(cnt === 0 && idx === functions.length) res();
            });
            idx++;
            cnt++;
        }
        /**
         * When cnt equals n, it indicates that the first n promises have been loaded. At this point, the program will exit the while loop and will not re-enter from its starting point.
         */
    });
}