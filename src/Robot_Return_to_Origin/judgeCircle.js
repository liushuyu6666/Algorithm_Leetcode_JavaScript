export function judgeCircle(moves) {
    const ups = (moves.match(/U/g) || []).join('');
    const downs = (moves.match(/D/g) || []).join('');
    const lefts = (moves.match(/L/g) || []).join('');
    const rights = (moves.match(/R/g) || []).join('');

    if(ups.length === downs.length && lefts.length === rights.length) return true;

    return false;
}