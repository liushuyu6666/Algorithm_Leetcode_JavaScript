async function promisePool(functions, n) {
    let idx = 0;

    const loadOnePromise = async () => {
        if(idx < functions.length){
            const currPromise = functions[idx]();
            idx++;
            await currPromise();
            await loadOnePromise();
        }
    }

    const pool = Array(n).fill().map(loadOnePromise);
    /**
     *  Race Conditions: 
     * the `loadOnePromise` function is mapped multiple times (based on the value of `n`), these multiple mapped functions can get invoked almost simultaneously. They all check the value of `idx`, and it's possible for more than one of them to fetch the same value before any of them has the chance to increment `idx`. 
     */

    await Promise.all(pool);
}