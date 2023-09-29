export function buddyStrings(s, goal) {
    if(s.length !== goal.length) return false;

    const lettersInS = new Array(26);
    lettersInS.fill(0);

    let twoSameLetters = false;
    const arr = [];

    // retrieve the string s
    for(let i = 0; i < s.length; i++) {
        lettersInS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        if(lettersInS[s.charCodeAt(i) - 'a'.charCodeAt(0)] > 1) twoSameLetters = true;
        
        if(s.charAt(i) !== goal.charAt(i)) {
            arr.push(s.charAt(i));
            arr.push(goal.charAt(i));

            if(arr.length === 4) {
                if(arr[0] === arr[3] && arr[1] === arr[2]) continue;
                else return false;
            } else if(arr.length > 4) return false;
        }
    }

    if(arr.length === 4) return true;
    if(arr.length == 0) return twoSameLetters;
    return false;
}