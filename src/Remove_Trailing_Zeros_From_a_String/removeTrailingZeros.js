export function removeTrailingZeros(num) {
    let i = num.length - 1, cnt = 0;
    while(i >= 0 && num[i] === '0') {
        cnt++;
        i--;
    }

    return num.substring(0, num.length - cnt);
}