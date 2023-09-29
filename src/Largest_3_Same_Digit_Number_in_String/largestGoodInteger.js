export function largestGoodInteger(num) {
    if(num.length < 3) return "";

    const stack = [];
    stack.push(num.charAt(0));
    stack.push(num.charAt(1));

    let ans = "";
    for(let i = 2; i < num.length; i++) {
        const curr = num.charAt(i);
        if(stack[stack.length - 1] === stack[stack.length - 2] && stack[stack.length - 1] === curr) {
            // If there is a good int ends at the current character.
            const digit = curr.charCodeAt(0) - '0'.charCodeAt(0);
            if(ans.length === 0 || digit > ans.charCodeAt(0) - '0'.charCodeAt(0)) {
                ans = curr.repeat(3);
            }
        } else {
            stack.push(curr);
        }
    }

    return ans;
}
