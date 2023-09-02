export function divideString(s, k , fill) {
    const ans = [];

    let sub = "";
    while(s.length > 0) {
        sub = s.substring(0, k);
        if(sub.length === k) {
            ans.push(sub);
            sub = "";
        }
        s = s.substring(k);
    }
    if(sub.length > 0) {
        while(sub.length < k) {
            sub += fill;
        }
        ans.push(sub);
    }

    return ans;
}