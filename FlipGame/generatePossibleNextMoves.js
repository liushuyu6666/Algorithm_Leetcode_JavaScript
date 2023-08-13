export function generatePossibleNextMoves(currentState) {
    const ans = [];

    for(let i = 1; i < currentState.length; i++) {
        if(currentState[i] === currentState[i - 1] && currentState[i] === '+') {
            const newStr = currentState.substring(0, i - 1) + '-'.repeat(2) + currentState.substring(i + 1);
            ans.push(newStr);
        }
    }

    return ans;
}