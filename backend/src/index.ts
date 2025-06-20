import dotenv from 'dotenv';
dotenv.config();

import { mintAndTransfer } from './Web3Provider';  
import { verifyAmount } from './HealthInfoService';
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import fs from 'fs';
import path from 'path';

import { User } from './User';

const PORT:number = parseInt(`${process.env.PORT || 3001}`);

const app = express();

app.use(helmet());

app.use(morgan("tiny"));

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*'
}));

app.use(express.json());

app.post("/user/:wallet", async (req: Request, res: Response, next: NextFunction) => {
    const wallet = req.params.wallet;

    const userInfo = {
        name: "",
        age:  null,
        firstTime: true
    };

    const dbPath = path.join(process.cwd(), 'db.json');
    let db: Record<string, any> = {};

    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf-8');
        db = data ? JSON.parse(data) : {};
    }

    if (db[wallet]) {
        // Usuário já existe, retorna as informações
        userInfo.name = db[wallet].name || "";
        userInfo.age = db[wallet].age || null;
        userInfo.firstTime = db[wallet].firstTime || null;

        return res.json({ message: 'Usuário já existe', wallet, userInfo: db[wallet] });
    }

    // Salva novo usuário
    db[wallet] = userInfo;
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json({ message: 'Usuário salvo com sucesso!', wallet, userInfo });
});

app.put("/user", async (req: Request, res: Response, next: NextFunction) => {

    const user : User = req.body;
    console.log("User received:", user);
    const wallet = user.address;
    const dbPath = path.join(process.cwd(), 'db.json');
    let db: Record<string, any> = {};

    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf-8');
        db = data ? JSON.parse(data) : {};
    }

    if (!db[wallet]) {
        return res.status(404).json({ message: 'Usuário não encontrado', wallet });
    }

    // Atualiza apenas os campos enviados no body
    db[wallet] = {
        ...db[wallet],
        ...req.body
    };

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json({ message: 'Usuário atualizado com sucesso!', wallet, user: db[wallet] });

});

app.post("/mint/:wallet", async (req: Request, res: Response, next: NextFunction) => {
    const wallet = req.params.wallet;
    const amount = await verifyAmount();

    if (!wallet) {
        return res.status(400).json({ message: 'Wallet is required' });
    }

    if(!amount || amount <= 0) {
        return res.status(400).json({ message: 'Invalid amount to mint' });
    }

    try {
        console.log(`Minting ${amount} tokens for wallet: ${wallet}`);
        
        const response = await mintAndTransfer(wallet, amount);        
        console.log(`Mint and transfer successful:`, response);

        res.json({ message: 'Mint and transfer successful', transactionHash: response.txHash, balanceOf: response.balanceOf?.toString() });
    } catch (error:any) {
        console.error("Error during minting:", error);
        res.status(500).json({ message: 'Error during minting', error: error.message });
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));