export function isDecomposable(s) {
    let stack = [];
    let special = [];
    for(let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        stack.push(char);
        if(stack.length === 3) {
            if(stack[0] === stack[1] && stack[0] === stack[2]) {
                stack = [];
            } else if(stack[0] === stack[1] && stack[0] !== stack[2]) {
                if(special.length > 0) return false;
                special.push(stack[0]);
                special.push(stack[1]);
                stack = [];
                stack.push(char);
            } else {
                return false;
            }
        }
    }
    if(stack.length > 0) {
        if(stack.length === 2 && stack[0] === stack[1] && special.length === 0) return true;
        return false;
    }
    return special.length === 2;
}
