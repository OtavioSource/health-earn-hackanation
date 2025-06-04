# Health Earn Backend

Este é o backend do projeto **Health Earn**, uma API Node.js/TypeScript que simula a integração com dados de saúde e wearables, permitindo que usuários recebam tokens baseados em suas atividades físicas.

## Funcionalidades

- **Mock de dados de saúde**: Gera dados simulados de passos, sono e atividades físicas.
- **Cadastro e atualização de usuários**: Salva e atualiza informações dos usuários em um arquivo JSON.
- **Mint de tokens**: Realiza a mintagem de tokens para a carteira do usuário, de acordo com o volume de exercícios simulados.
- **Integração com Web3**: Usa contratos inteligentes para mintar tokens na blockchain.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/health-earn-hackanation.git
   cd health-earn-hackanation/backend
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do backend com as seguintes variáveis:
   ```
   NODE_URL=URL_DA_RPC_ETHEREUM
   PRIVATE_KEY=SUA_PRIVATE_KEY
   CONTRACT_ADDRESS=ENDERECO_DO_CONTRATO
   WALLET=ENDERECO_DA_WALLET
   PORT=3001
   CORS_ORIGIN=*
   ```

## Scripts

- `npm run dev` — Inicia o servidor em modo desenvolvimento (TypeScript).
- `npm run compile` — Compila o TypeScript para JavaScript.
- `npm start` — Inicia o servidor a partir do código compilado.

## Endpoints

### POST `/user/:wallet`
Cria um novo usuário com a wallet informada.  
Campos opcionais no body: `name`, `age`, `firstTime`.

### PUT `/user`
Atualiza os dados do usuário.  
Body deve conter `address` (wallet) e os campos a atualizar.

### POST `/mint/:wallet`
Faz a mintagem de tokens para a wallet informada, baseada em dados mockados de saúde.

## Observações

- Os dados dos usuários são salvos no arquivo `db.json` na raiz do backend simulando um banco de dados.
- O valor do token é calculado a partir dos dados simulados de saúde.
- O contrato inteligente deve ser compatível com a função `mint(address, amount)`.

## Requisitos

- Node.js 18+
- Conta e contrato na blockchain de testes (Ethereum, Polygon, etc.)

---

Feito para Hackanation 2025 🚀