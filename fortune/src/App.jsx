import { useState } from "react";
import FortuneCookie from "./components/FortuneCookie";
import { fortunes } from "./db/fortunes";
import "./App.css";

function App() {
  const [fortune, setFortune] = useState(null);

  const fortuneTypes = [
    { type: "money", icon: "💰" },
    { type: "love", icon: "💕" },
    { type: "health", icon: "🍀" },
    { type: "luck", icon: "✨" },
    { type: "success", icon: "🌟" },
  ];

  const pickFortune = () => {
    const randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
    const randomTypeIndex = Math.floor(Math.random() * fortuneTypes.length);

    setFortune({
      text: fortunes[randomFortuneIndex],
      ...fortuneTypes[randomTypeIndex],
    });
  };

  const resetFortune = () => {
    setFortune(null);
  };

  return (
    <div className="app-container">
      <h1>2026년 포춘쿠키 운세</h1>

      <FortuneCookie
        onOpen={pickFortune}
        onReset={resetFortune}
        fortune={fortune}
      />
    </div>
  );
}

export default App;
