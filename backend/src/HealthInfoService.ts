export async function verifyAmount(): Promise<number> {

    // Mock de dados de saúde e wearables
    const mockData = {
        steps: Math.floor(Math.random() * 15000), // 0 a 15.000 passos
        sleepHours: Math.floor(Math.random() * 5) + 5, // 5 a 9 horas de sono
        activities: Math.floor(Math.random() * 4) // 0 a 3 atividades físicas
    };

    // Regras para calcular o amount
    const amount =
        Math.floor(mockData.steps / 1000) * 1 + // 1 ponto a cada 1000 passos
        mockData.sleepHours * 2 +               // 2 pontos por hora de sono
        mockData.activities * 3;                // 3 pontos por atividade física

    return amount;
    
}