export function transferMoney(balances) {
    const plusAccount = [];
    const minusAccount = [];
    const sum = balances.reduce((acc, val) => acc + val, 0);
    const avg = sum / balances.length;
    const msg = [];

    balances.forEach((balance, i) => {
        if(balance > avg) {
            plusAccount.push({idx: i, balance: balance - avg});
        } else if (balance < avg) {
            minusAccount.push({idx: i, balance: avg - balance});
        }
    });

    while(plusAccount.length > 0 && minusAccount.length > 0) {
        const plus = plusAccount[0];
        const minus = minusAccount[0];
        const diff = plus.balance - minus.balance;

        if(diff > 0) {
            msg.push(`${plus.idx} transfer $${minus.balance} to ${minus.idx}`);
            plus.balance = diff;
            minusAccount.shift();
        } else if (diff < 0) {
            msg.push(`${plus.idx} transfer $${plus.balance} to ${minus.idx}`);
            minus.balance = -diff;
            plusAccount.shift();
        } else {
            msg.push(`${plus.idx} transfer $${plus.balance} to ${minus.idx}`);
            plusAccount.shift();
            minusAccount.shift();
        }
    }

    if(plusAccount.length > 0 || minusAccount.length > 0) {
        throw new Error("Cannot even all balances");
    }

    return msg;
}