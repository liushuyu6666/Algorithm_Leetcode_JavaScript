export function main(num1, num2) {
    const number1 = num1.split('');
    const number2 = num2.split('');

    let carry = 0, str = "";
    while(number1.length > 0 && number2.length > 0) {
        const digit1 = number1[number1.length - 1].charCodeAt(0) - '0'.charCodeAt(0);
        const digit2 = number2[number2.length - 1].charCodeAt(0) - '0'.charCodeAt(0);

        const sum = digit1 + digit2 + carry;

        carry = Math.floor(sum / 10);
        str = String.fromCharCode((sum - carry * 10) + '0'.charCodeAt(0)) + str;

        number1.pop();
        number2.pop();
    }

    while(number1.length > 0) {
        const digit1 = number1[number1.length - 1].charCodeAt(0) - '0'.charCodeAt(0);

        const sum = digit1 + carry;

        carry = Math.floor(sum / 10);
        str = String.fromCharCode((sum - carry * 10) + '0'.charCodeAt(0)) + str;

        number1.pop();
    }

    while(number2.length > 0) {
        const digit2 = number2[number2.length - 1].charCodeAt(0) - '0'.charCodeAt(0);

        const sum = digit2 + carry;

        carry = Math.floor(sum / 10);
        str = String.fromCharCode((sum - carry * 10) + '0'.charCodeAt(0)) + str;

        number2.pop();
    }

    if(carry !== 0) {
        str = String.fromCharCode(carry + '0'.charCodeAt(0)) + str;
    }

    return str;
}