export function isValid(s) {
    const stack = [], n = s.length;

    for(let i = 0; i < n; i++) {
        const c = s.charAt(i);
        if(c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else if (c === ')' || c === '}' || c === ']') {
            const leftSymbol = stack.pop();
            if(!isPaired(leftSymbol, c)) {
                return false;
            }
        }
    }

    if(stack.length === 0) return true;
    return false;
}

function isPaired(left, right) {
    if(left === '(' && right === ')') return true;
    if(left === '{' && right === '}') return true;
    if(left === '[' && right === ']') return true;
    return false;
}