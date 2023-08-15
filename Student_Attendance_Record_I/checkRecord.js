export function checkRecord(s) {
    const absences = (s.match(/A/g) || []).length;
    const late = (s.match(/L+/g) || []).filter(l => l.length >= 3);

    if(absences < 2 && late.length === 0) return true;
    return false;
}
