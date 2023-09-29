import { promisePool1 } from "./promisePool1.js";
import { promisePool_wrong2 as promisePool2 } from "./promisePool_wrong2.js"

function test() {
    const finishes = [];
    const sleep = (t) => new Promise(res => setTimeout(() => {
        const finish = new Date();
        const duration = finish - start;
        finishes.push(duration);
        res();
    }, t));

    const start = new Date();
    const promise = promisePool2([
        () => sleep(300),
        () => sleep(400),
        () => sleep(200),
    ], 2);

    promise.then(() => {
        console.log(finishes);
    });
}

test();