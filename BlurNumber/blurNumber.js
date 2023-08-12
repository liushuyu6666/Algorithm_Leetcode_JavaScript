export function blurNumber(log) {
    const pattern = /\b\d{16}\b/g;

    return log.replace(pattern, "****************");
}

export function blurNumber2(log) {
    const pattern = /\b\d{4}-\d{4}-\d{4}-\d{4}\b/g;

    return log.replace(pattern, "****-****-****-****");
}