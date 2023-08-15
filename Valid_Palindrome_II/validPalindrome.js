export function validPalindrome(s) {
    return dfs(s, 0, s.length - 1, true);
}

function dfs(s, i, j, hasChance) {
    if(i === j || i > j) return true;
    if(s.charAt(i) === s.charAt(j)) return dfs(s, i+1, j-1, hasChance);
    if(s.charAt(i) !== s.charAt(j)) {
        if(!hasChance) return false;
        hasChance = false;
        return dfs(s, i+1, j, hasChance) || dfs(s, i, j-1, hasChance)
    }
}