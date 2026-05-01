import { useState, useEffect } from "react";
import ChatInterface from "./components/ChatInterface";
import Navigation from "./components/Navigation";

function App() {
  const [user, setUser] = useState<string | null>(localStorage.getItem("zenia_user"));
  const [inputValue, setInputValue] = useState("");

  const handleLogin = () => {
    if (inputValue.trim()) {
      localStorage.setItem("zenia_user", inputValue);
      setUser(inputValue);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#F5F5DC] p-6 text-center">
        <h1 className="text-3xl font-bold text-amber-600 mb-4">Bienvenida a Zenia</h1>
        <p className="mb-6 text-gray-600">Para que tus emociones sean solo tuyas, dime cómo te llamas:</p>
        <input 
          className="p-3 border-2 border-amber-200 rounded-xl mb-4 w-full max-w-xs"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tu nombre..."
        />
        <button 
          onClick={handleLogin}
          className="bg-amber-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg"
        >
          Entrar a mi espacio
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#F5F5DC]">
      <main className="flex-1 overflow-hidden">
        <ChatInterface currentUser={user} />
      </main>
      <Navigation />
    </div>
  );
}

export default App;