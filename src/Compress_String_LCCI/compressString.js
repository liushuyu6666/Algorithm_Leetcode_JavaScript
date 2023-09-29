export function compressString(S) {
    if(S.length < 2) return S;
    let str = "";

    let cnt = 1;
    for(let i = 1; i < S.length; i++) {
        const prev = S.charAt(i - 1);
        const curr = S.charAt(i);

        if(curr !== prev) {
            str += `${prev}${cnt}`;
            cnt = 0;   
        }
        cnt++;
    }

    str += `${S.charAt(S.length - 1)}${cnt}`;

    if(str.length >= S.length) return S;
    return str;
}