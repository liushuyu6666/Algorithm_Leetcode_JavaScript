// [0, 1, 2, 3, 4]
// DIDI -> 4, 0, 3, 1, 2
// D -> last -> pop ; I -> first -> shift

export function diStringMatch(s) {
    const n = s.length;

    const arr = new Array(n);
    for(let i = 0; i <= n; i++) {
        arr[i] = i;
    }

    const ans = new Array();
    for(let i = 0; i < n; i++) {
        if(s.charAt(i) === 'D') {
            ans.push(arr.pop());
        } else {
            ans.push(arr.shift());
        }
    }

    ans.push(arr.pop());

    return ans;
}