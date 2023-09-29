export function minimumMoves(s) {
    let move = 0, i = 0;
    while(i < s.length) {
        if(s.charAt(i) === 'X') {
            move++;
            i += 3;
        } else {
            i++;
        }
    }


    return move;
}