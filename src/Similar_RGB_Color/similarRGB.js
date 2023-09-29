export function similarRGB(color) {
    const seg1 = color.substring(1, 3);
    const seg2 = color.substring(3, 5);
    const seg3 = color.substring(5, 7);

    return '#' + findShortest(seg1) + findShortest(seg2) + findShortest(seg3);
};

function findShortest(seg) {
    const num = parseInt(seg, 16);

    const div = Math.floor(num / 17);
    const rem = num % 17;

    if(rem > 8) {
        return ((div + 1) * 17).toString(16).padStart(2, '0');
    } else {
        return (div * 17).toString(16).padStart(2, '0');
    }
}