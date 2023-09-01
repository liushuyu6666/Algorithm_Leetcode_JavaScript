export function numDifferentIntegers(word) {
    const set = new Set();

    let stack = [];
    for(let i = 0; i < word.length; i++) {
        if(word.charCodeAt(i) >= '0'.charCodeAt(0) && word.charCodeAt(i) <= '9'.charCodeAt(0)) {
            stack.push(word.charAt(i));
        } else if (stack.length > 0) {
            const number = convertToNumber(stack);
            stack = [];
            set.add(number);
        }
    }
    if(stack.length > 0) {
        const number = convertToNumber(stack);
        stack = [];
        set.add(number);
    }
    return set.size;
}

function convertToNumber(stack) {
    while(stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }
    if(stack.length === 0) return '0';
    else return stack.join('');
}
