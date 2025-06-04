import Web3 from 'web3';
import {Balance} from './Balance';

const web3 = new Web3(`${process.env.NODE_URL}`);
const WELL_ABI = require("./abi.well.contract.json");

const account = web3.eth.accounts.privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);
web3.eth.accounts.wallet.add(account);

export async function mintAndTransfer(to: string, amount: number): Promise<Balance> {
    const contract = new web3.eth.Contract(WELL_ABI, `${process.env.CONTRACT_ADDRESS}`, {from: `${process.env.WALLET}`});
    
    const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
    
    const tx = await contract.methods.mint(to, amountInWei).send();
    const balanceOf = await contract.methods.balanceOf(to).call();

    const response = {txHash: tx.transactionHash, balanceOf: balanceOf || 0} as Balance;

    return response;
}