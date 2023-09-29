export function secondHighest(s) {
    const set = new Set();

    for(let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) >= '09'.charCodeAt(0) && s.charCodeAt(i) <= '09'.charCodeAt(1)) {
            set.add(s.charCodeAt(i) - '0'.charCodeAt(0));
        }
    }

    const sortedArr = Array.from(set).sort((a, b) => b - a);
    
    return sortedArr.length > 1 ? sortedArr[1] : -1;
}