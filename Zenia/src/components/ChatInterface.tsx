import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { loadMemory, saveMemory } from "../lib/memory";

export default function ChatInterface({ currentUser }: { currentUser: string }) {
  // Ahora el chat carga solo los mensajes de este usuario específico
  const [messages, setMessages] = useState(() => loadMemory(currentUser));
  const [input, setInput] = useState("");

  useEffect(() => {
    saveMemory(currentUser, messages);
  }, [messages, currentUser]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    
    // Simulación de respuesta de Zenia
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: `Hola ${currentUser}, estoy analizando lo que me cuentas...` }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-[#F5F5DC]">
      <div className="p-4 bg-amber-100 text-amber-800 text-center font-bold">
        Espacio privado de: {currentUser}
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg: any, i: number) => (
          <div key={i} className={`p-3 rounded-2xl max-w-[80%] ${msg.role === "assistant" ? "bg-white text-gray-800 shadow-sm" : "bg-amber-400 text-white ml-auto"}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white border-t border-amber-100 mb-6">
        <div className="flex gap-2">
          <input 
            className="flex-1 p-3 border rounded-xl" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="¿Cómo te sientes?" 
          />
          <button onClick={handleSend} className="p-3 bg-amber-500 text-white rounded-xl"><Send size={20} /></button>
        </div>
      </div>
    </div>
  );
}