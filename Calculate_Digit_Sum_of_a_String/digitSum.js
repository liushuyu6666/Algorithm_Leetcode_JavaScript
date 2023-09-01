function digitSum(s, k) {
    while(s.length > k) {
        s = helper(s, k);
    }

    return s;
}

function helper(s, k) {
    const calStr = (s) => {
        let sum = 0;
        for(let i = 0; i < s.length; i++) {
            const code = s.charCodeAt(i) - '0'.charCodeAt(0);
            sum += code;
        }
        return sum + '';
    } 

    let str = "";
    while(s.length > 0) {
        const former = s.substring(0, k);
        str += calStr(former);
        s = s.substring(k);
    }

    return str;
}
