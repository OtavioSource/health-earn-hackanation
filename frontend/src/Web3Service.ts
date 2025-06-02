import Web3 from 'web3';
import axios from "axios";
import { User } from "./UserContext";

const API_URL = `${import.meta.env.VITE_API_URL}`;

export async function createUser(): Promise<User> {

  if (!window.ethereum) throw new Error('No crypto wallet found. Please install it.');

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) throw new Error('No accounts found. Please connect your wallet.');

  const response = await axios.post(`${API_URL}/user/${accounts[0]}`);
  console.log("Response from connect:", response.data);
  
  const user : User = new User(
    true,
    response.data.userInfo.name,
    response.data.userInfo.age,
    accounts[0],
    response.data.userInfo.firstTime
  );

  return user as User;
}

export async function updateUser(user: User): Promise<User> {
 
  console.log("Updating user:", user);
  const response = await axios.put(`${API_URL}/user`, user);
  
  console.log("Response from updateUser:", response.data);
  return response.data.user as User;
}