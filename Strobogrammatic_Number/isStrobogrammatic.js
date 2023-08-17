/**
 * @param {string} num
 * @return {boolean}
 */
export function isStrobogrammatic(num) {
    const n = num.length;
    const map = new Map();
    map.set('0', '0');
    map.set('1', '1');
    map.set('8', '8');
    map.set('6', '9');
    map.set('9', '6');

    let i = 0, j = n - 1 - i;
    while(i < j) {
        const c = num.charAt(i);
        const cj = num.charAt(j);
        if(!map.has(c)) {
            return false;
        }
        if(map.get(c).localeCompare(cj)) {
            return false;
        }
        i++;
        j = n - 1 - i;
    }

    if(i === j) {
        const c = num.charAt(i);
        map.delete('6');
        map.delete('9');
        if(!map.has(c)) {
            return false;
        }
    }

    return true;
}