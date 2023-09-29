function promisePool(functions, n) {
    return new Promise(() => {
        let idx = 0, cnt = 0;
        while(idx < functions.length) {
            /**
             * Busy-waiting issue:
             * the loop is constantly running without waiting, consuming significant CPU resources. Once the count `cnt` reaches `n`, the inner code block won't execute. Instead, the loop will just continue to check the condition while(idx < functions.length) and if(cnt < n) in rapid succession, without ever waiting or yielding control.
            */
            if(cnt < n) {
                const currPromise = functions[idx]();
                idx++;
                cnt++;
                currPromise.then(() => {
                    cnt--;
                });
            }
        }
    });
}