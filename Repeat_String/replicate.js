String.prototype.replicate = function(times) {
    let str = '';
    while(times) {
        str += this;
        times--;
    }
    return str;
}

export function replicate() {
    const str = "hello";
    return str.replicate(3);
}