export function canConstruct(ransomNote, magazine) {
    const set = makeMap(magazine);

    for(const c of ransomNote) {
        if(!set.has(c)) return false;
        let num = set.get(c);
        num--;
        if(num === 0) {
            set.delete(c);
        } else {
            set.set(c, num);
        }
    }

    return true;
}

function makeMap(str) {
    const map = new Map();

    for(const c of str) {
        if(!map.has(c)) {
            map.set(c, 1);
        } else {
            map.set(c, map.get(c) + 1);
        }
    }

    return map;
}
