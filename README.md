# health-earn-hackanation

# 🩺 Health Point – Classificador Inteligente de Mensagens

O **Health Point** é um fluxo desenvolvido no **n8n** que classifica mensagens de usuários de forma inteligente e personalizada, com foco em saúde, bem-estar e nutrição.

---

## 🔗 Etapas do Fluxo

### 1. 📥 Entrada da Mensagem
- **Nó:** `Webhook`
- **Função:** Recebe mensagens via URL pública contendo o parâmetro `chatInput`, enviado pelo usuário.

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
