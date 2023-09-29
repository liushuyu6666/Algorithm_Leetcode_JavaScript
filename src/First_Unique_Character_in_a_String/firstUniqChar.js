export function firstUniqChar(s) {
    const map = new Map();
    const set = new Set();

    for(let i = 0; i < s.length; i++) {
        const c = s.charAt(i);

        if(set.has(c)) {
            map.delete(c);
        } else {
            set.add(c);
            map.set(c, i);
        }
    }

    let min = Infinity;
    for(const val of map.values()) {
        min = Math.min(min, val)
    }

    return min == Infinity ? -1 : min;
}