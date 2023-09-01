export function minLength(s) {
    const map = new Map();
    map.set('A', 'B');
    map.set('C', 'D');

    const stack = [];
    stack.push(s.charAt(0));

    for(let i = 1; i < s.length; i++) {
        if(map.get(stack[stack.length - 1]) === s.charAt(i)) {
            stack.pop();
        } else {
            stack.push(s.charAt(i));
        }
    }

    return stack.length;
}
