# Health Earn

## Visão Geral

O **Health Earn** é uma plataforma inovadora que recompensa usuários por adotarem hábitos saudáveis, utilizando blockchain para garantir transparência e segurança nas recompensas. O sistema é composto por três principais módulos:

- **Frontend:** Interface web para interação dos usuários.
- **Backend:** API responsável pela lógica de negócios, integração com IA e blockchain.
- **Smart Contract:** Contrato inteligente na blockchain para emissão e transferência de tokens de recompensa.

---

## Sumário

- [Arquitetura](#arquitetura)
- [Frontend](#frontend)
- [Backend](#backend)
- [Smart Contract](#smart-contract)
- [Fluxo do Usuário](#fluxo-do-usuário)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Autores](#autores)

---

## Arquitetura

```
health-earn-hackanation/
│
├── backend/         # API Node.js (Express)
├── frontend/        # Aplicação Web React + Vite
└── smart-contract/  # Contratos inteligentes (Hardhat)
```

---

## Frontend

- **Localização:** [`frontend/`](frontend/README.md)
- **Tecnologia:** React + TypeScript + Vite
- **Descrição:**  
  Interface amigável para cadastro, visualização de saldo, histórico de atividades, chat de ajuda com IA e interação com recompensas.

### Principais Funcionalidades

- Cadastro e login de usuários.
- Visualização de perfil, saldo de tokens e histórico de atividades.
- Chat inteligente para dúvidas e dicas de saúde, alimentação e bem-estar.
- Integração com backend para atualização de dados e obtenção de recompensas.

### Fluxo de telas

- Conecte sua carteira.
- Caso seja o primeiro acesso, você irá para uma tela de cadastro de informações pessoais para ajudar
napersonalização do atendimento da IA.
- Se não for a primeira vez, você será redirecioanado para a tela de perfil, onde terá informações de saldo, atividades recentes dos amigos, histórico de atividade entre outras informações.

### Como rodar

```sh
cd frontend
npm install
npm run dev
```

Acesse em [http://localhost:3000](http://localhost:3000) (ou porta configurada pelo Vite).

---

## Backend

- **Localização:** [`backend/`](backend/README.md)
- **Tecnologia:** Node.js, Express, TypeScript
- **Descrição:**  
  API REST responsável por gerenciar usuários, processar atividades e interagir com o smart contract para emissão de tokens.

### Principais Endpoints

- `POST /user/:wallet` — Cria ou retorna usuário pelo endereço de wallet.
- `PUT /user` — Atualiza dados do usuário.
- `POST /mint/:wallet` — Realiza a emissão e transferência de tokens para o usuário.

### Como rodar

```sh
cd backend
npm install
npm run dev
```

A API estará disponível em [http://localhost:3001](http://localhost:3001) (ou porta definida no `.env`).

---

## Smart Contract

- **Localização:** [`smart-contract/`](smart-contract/README.md)
- **Tecnologia:** Solidity, Hardhat
- **Descrição:**  
  Contrato inteligente ERC20 para emissão e transferência dos tokens de recompensa ($WELL).

### Principais Arquivos

- `contracts/` — Código fonte dos contratos.
- `scripts/` — Scripts de deploy e interação.
- `test/` — Testes automatizados.

### Como rodar

```sh
cd smart-contract
npm install
npx hardhat test         # Executa os testes
npx hardhat node         # Sobe um nó local
npx hardhat run scripts/deploy.ts --network localhost
```

---

## Fluxo do Usuário

1. **Cadastro:** Usuário cria perfil informando dados básicos.
2. **Atividades:** Usuário realiza atividades saudáveis (registradas manualmente ou via integração futura).
3. **Recompensa:** Usuário solicita recompensa, backend valida e aciona o smart contract para emitir tokens.
4. **Chat IA:** Usuário pode tirar dúvidas ou receber dicas via chat inteligente integrado ao OpenAI.
5. **Histórico:** Usuário acompanha saldo e histórico de atividades/recompensas.

---

## Tecnologias Utilizadas

- **Frontend:** React, Vite, TypeScript, Bootstrap
- **Backend:** Node.js, Express, TypeScript, OpenAI API, Web3.js/Ethers.js
- **Smart Contract:** Solidity, Hardhat, Ethers.js

---

## Autores

- [Seu Nome]
- [Outros Integrantes]

---

## Observações

- Certifique-se de configurar corretamente os arquivos `.env` em cada módulo.
- O projeto pode ser facilmente expandido para integrar dispositivos de saúde, wearables e outros serviços.

---

Para mais detalhes, consulte os READMEs específicos de cada módulo:

- [frontend/README.md](frontend/README.md)
- [backend/README.md](backend/README.md)
- [smart-contract/README.md](smart-contract/README.md)

### Documentação da nossa IA

# 🩺 Health Point – Classificador Inteligente de Mensagens

O **Health Point** é um fluxo desenvolvido no **n8n** que classifica mensagens de usuários de forma inteligente e personalizada, com foco em saúde, bem-estar e nutrição.

---

## 🔗 Etapas do Fluxo

### 1. 📥 Entrada da Mensagem
- **Nó:** `Webhook`
- **Função:** Recebe mensagens via URL pública contendo o parâmetro `mensagem`, enviado pelo usuário.

---

### 2. 🧠 Classificação de Conteúdo
- **Nó:** `Classificação`
- **Função:** Analisa semanticamente a mensagem recebida e a classifica em uma das categorias abaixo com base no seu significado e contexto:

**Categorias:**
- Informação  
- Reclamação  
- Sugestão  
- Suplementação  
- Alimentação Saudável  
- Vida Saudável  
- Saudação  

> ⚠️ Se nenhuma categoria for identificada com confiança, o fluxo segue para a resposta padrão (**Fallback**).

---

## 🧭 Ações por Categoria

### 🔹 1. Informação
- **Objetivo:** Esclarecer dúvidas com respostas objetivas e oferecer ajuda adicional.  
- **Prompt:**  
  > “Responda a dúvida da pessoa de forma mais breve possível e pergunte se pode ajudar em algo mais.”
- **Nós:**  
  - `Atendente Informação` → `Responde-Informação`  
  - `IA:` OpenAI-informação  

---

### 🔹 2. Reclamação
- **Objetivo:** Demonstrar empatia, reconhecer o problema e sugerir solução plausível.  
- **Prompt:**  
  > “Acalme a pessoa, deduza a causa do problema e apresente a solução.”
- **Nós:**  
  - `Reclamação` → `Responde-Reclamação`  
  - `IA:` OpenAI-Reclamação  

---

### 🔹 3. Sugestão
- **Objetivo:** Mostrar abertura e valorização da ideia do usuário.  
- **Prompt:**  
  > “Agradeça a sugestão e informe que estaremos analisando para futuras implementações.”
- **Nós:**  
  - `Sugestão` → `Responde-Sugestão`  
  - `IA:` OpenAI-Sugestão  

---

### 🔹 4. Suplementação
- **Objetivo:** Oferecer dicas práticas sobre uso consciente de suplementos, com linguagem emocional e responsável.  
- **Prompt:**  
  > “Você é um especialista em nutrição esportiva. Gere uma dica clara e prática sobre o uso de suplementos como whey, creatina, vitaminas etc. Finalize com o alerta: ‘Sempre consulte um nutricionista antes de usar suplementos.’ Adicione emoção no texto.”
- **Nós:**  
  - `Suplementação` → `Responde-Suplementação`  
  - `IA:` OpenAI-Suplementação  

---

### 🔹 5. Alimentação Saudável
- **Objetivo:** Fornecer orientações simples e motivadoras sobre boas práticas alimentares.  
- **Prompt:**  
  > “Você é um nutricionista especializado em alimentação saudável e balanceada. Gere uma dica prática e objetiva para o dia [INSERIR DIA DA SEMANA]. Inclua sugestões de refeições ou alimentos funcionais. Finalize com uma mensagem de incentivo à consistência.”
- **Nós:**  
  - `Alimentação-Saudável` → `Responde-Alimentação Saudável`  
  - `IA:` OpenAI-Alimentação Saudável  

---

### 🔹 6. Vida Saudável
- **Objetivo:** Estimular hábitos de bem-estar como caminhadas, natureza e equilíbrio emocional.  
- **Prompt:**  
  > “Textos que promovem hábitos e práticas voltadas ao bem-estar físico e mental, como caminhar ao ar livre, trilhas, manter uma rotina leve e equilibrada.”
- **Nós:**  
  - `Vida Saudável` → `Responde-Vida Saudável`  
  - `IA:` OpenAI-Vida Saudável  

---

### 🔹 7. Saudação
- **Objetivo:** Iniciar a conversa com simpatia e conexão humana.  
- **Prompt:**  
  > “Você é um assistente virtual simpático e acolhedor. Gere uma saudação curta, objetiva e educada para iniciar uma conversa sobre vida saudável, alimentação, treino ou suplementação.”
- **Nós:**  
  - `Saudação` → `Responde-Saudação`  
  - `IA:` OpenAI Chat Model1  

---

### 🔸 Fallback – Mensagem não identificada
- **Situação:** Classificação falha ou mensagem fora do escopo.  
- **Resposta Padrão:**

```json
{
  "text": "Infelizmente não consigo te ajudar sobre o assunto solicitado"
}
