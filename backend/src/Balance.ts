export class Balance {

    balanceOf: number;
    txHash: string;

    constructor(txHash: string, balanceOf: number) {
        this.balanceOf = balanceOf;
        this.txHash = txHash;

    }
}