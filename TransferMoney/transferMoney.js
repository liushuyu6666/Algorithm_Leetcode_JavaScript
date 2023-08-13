export function transferMoney(accounts) {
    const transfersPlus = [];
    const transfersMinus = [];
    const str = [];
    const sum = accounts.reduce((acc, ele) => acc + ele, 0);
    const avg = sum / accounts.length;

    console.log(`average should be ${avg}`); // [120, 80, 200, 150, 150]

    accounts.forEach((account, i) => {
        if(account > avg) {
            transfersPlus.push({idx: i, balance: account - avg});
        } else if (account < avg) {
            transfersMinus.push({idx: i, balance: avg - account});
        }
    });

    while(transfersPlus.length > 0 && transfersMinus.length > 0) {
        const plus = transfersPlus[0];
        const minus = transfersMinus[0];
        const diff = plus.balance - minus.balance;
        if(diff > 0) {
            str.push(`user ${plus.idx} transfers ${minus.balance} to user ${minus.idx}`);
            plus.balance -= minus.balance;
            transfersMinus.shift();
        } else if (diff < 0) {
            str.push(`user ${plus.idx} transfers ${plus.balance} to user ${minus.idx}`);
            minus.balance -= plus.balance;
            transfersPlus.shift();
        } else {
            str.push(`user ${plus.idx} transfers ${plus.balance} to user ${minus.idx}`);
            transfersMinus.shift();
            transfersPlus.shift();
        }
    }

    if(transfersPlus.length > 0 || transfersMinus.length > 0) {
        throw new Error("can not even all accounts.");
    }

    return str;
}