var promisePool = async function(functions, n) {
    let idx = 0;

    const loadOnePromise = async () => {
        if(idx < functions.length){
            await functions[idx++]();
            await loadOnePromise();
            /**
             * The statement const `functions[idx++]();` will get `idx` value and increment `idx` in a single step, preventing multiple instances of the `loadOnePromise` function from accessing the same index of the functions array at the same time. 
             */
            
        }
    }

    const pool = Array(n).fill().map(loadOnePromise);

    await Promise.all(pool);
};
