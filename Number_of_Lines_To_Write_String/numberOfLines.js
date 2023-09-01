export function numberOfLines(widths, s) {
    // The variable `lines` means the number of lines, the `width` means the width of the last line.
    let lines = 1, width = 0;
    for(let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 'a'.charCodeAt(0);
        const pixel = widths[code];
        if(width < 100 && width + pixel <= 100) {
            width += pixel;
        } else if(width < 100 && width + pixel > 100 || width === 100) {
            lines++;
            width = pixel;
        }
    }

    return [lines, width];
}