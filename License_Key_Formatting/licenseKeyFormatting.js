export function licenseKeyFormatting(s, k) {
    let ss = s.split('').filter((ele) => ele !== '-');

    let str = '';
    while(ss.length > 0) {
        let temp = '';
        while(temp.length < k && ss.length > 0) {
            temp = ss.pop() + temp;
        }
        str = `-${temp}${str}`;
    }

    if(str[0] === '-') str = str.substring(1);

    return str.toUpperCase();
}
