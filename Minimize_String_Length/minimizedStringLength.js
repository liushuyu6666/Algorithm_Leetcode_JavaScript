export function minimizedStringLength(s) {
    const set = new Set();

    for(let i = 0; i < s.length; i++) {
        set.add(s.charAt(i));
    }

    return set.size;
}