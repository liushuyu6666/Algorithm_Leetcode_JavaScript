export function countSegments(s) {
    const words = s.split(' ').filter((w) => w.length > 0);

    return words.length;
}