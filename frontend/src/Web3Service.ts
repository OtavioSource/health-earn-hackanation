import Web3 from 'web3';
import axios from "axios";
import { User } from "./UserContext";

const API_URL = `${import.meta.env.VITE_API_URL}`;

export async function connect(): Promise<User> {

  if (!window.ethereum) throw new Error('No crypto wallet found. Please install it.');

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) throw new Error('No accounts found. Please connect your wallet.');

  //const response = await axios.post(`${API_URL}connect/${accounts[0]}`);

  return {
    "isLoggedIn": true,
    "name": "John Doe",
    "age": 30,
    "address": accounts[0],
    "firstTime": true
  } as User;
}

export async function updateUser(): Promise<User> {

  const response = await axios.put(`${API_URL}user`);

  return response.data as User;
}