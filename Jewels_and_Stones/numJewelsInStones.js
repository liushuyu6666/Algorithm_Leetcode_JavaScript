export function numJewelsInStones(jewels, stones) {
    jewels = jewels.split('');

    let sum = 0;
    while(jewels.length > 0) {
        const jewel = jewels.shift();
        const pattern = `${jewel}`;

        const regex = new RegExp(pattern, 'g');
        const matches = stones.match(regex);

        sum += (matches || []).length;
    }
    return sum;
};