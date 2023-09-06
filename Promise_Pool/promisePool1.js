export function promisePool1(functions, n) {
    return new Promise((res) => {
        let idx = 0, cnt = 0;
        
        const loadOnePromise = () => {
            if(idx < functions.length) {
                while(cnt < n && idx < functions.length) {
                    const currPromise = functions[idx]();
                    idx++;
                    cnt++;
                    currPromise.then(() => {
                        cnt--;
                        loadOnePromise();
                    });
                }
            } else if(idx === functions.length && cnt === 0) {
                res();
            }
        }

        loadOnePromise();
    });
}
