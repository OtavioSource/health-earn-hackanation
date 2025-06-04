import { useUser } from "../UserContext";
import { useState } from "react";
import axios from "axios";

function HelpChatContent() {

    const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSend(e: React.FormEvent) {
        e.preventDefault();
        if (!input.trim()) return;

        // Adiciona mensagem do usuário
        setMessages((msgs) => [...msgs, { from: "user", text: input }]);
        setLoading(true);

        try {
        const response = await axios.post("https://webhook.waurumai.com/webhook/mensage", { mensagem: input, user_id: "1"});
        setMessages((msgs) => [
            ...msgs,
            { from: "bot", text: response.data.text }
        ]);
        } catch (err) {
        setMessages((msgs) => [
            ...msgs,
            { from: "bot", text: "Desculpe, houve um erro ao buscar a resposta." }
        ]);
        } finally {
        setInput("");
        setLoading(false);
        }
  }


    return (
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
            <div className="title-group mb-3">
                <h1 className="h2 mb-0">Como podemos ajudar?</h1>
            </div>

            <div className="row my-4">
                <div className="col-lg-7 col-12">
                    <div className="custom-block bg-white" style={{ minHeight: 400 }}>
                        <div style={{ maxHeight: 300, overflowY: "auto", marginBottom: 16 }}>
                            {messages.map((msg, idx) => (
                                <div key={idx} style={{ textAlign: msg.from === "user" ? "right" : "left" }}>
                                    <span
                                        style={{
                                            display: "inline-block",
                                            background: msg.from === "user" ? "#e0ffe0" : "#f0f0f0",
                                            borderRadius: 8,
                                            padding: "8px 12px",
                                            margin: "4px 0"
                                        }}
                                    >
                                        {msg.text}
                                    </span>
                                </div>
                            ))}
                            {loading && (
                                <div style={{ textAlign: "left" }}>
                                    <span style={{ background: "#f0f0f0", borderRadius: 8, padding: "8px 12px" }}>
                                        Digitando...
                                    </span>
                                </div>
                            )}
                        </div>
                        <form className="d-flex" onSubmit={handleSend}>
                            <input
                                className="form-control me-2"
                                type="text"
                                placeholder="Digite sua pergunta..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                disabled={loading}
                            />
                            <button className="btn btn-primary" type="submit" disabled={loading || !input.trim()}>
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-lg-5 col-12">
                    <div className="custom-block custom-block-contact">
                        <h6 className="mb-4">Com a ajuda do nosso chat iremos te dar informações personalizadas e dicas para que vpcê possa ter uma vida saudável</h6>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default HelpChatContent;