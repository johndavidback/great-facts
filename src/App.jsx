
import React, { useState, useRef } from 'react';
import FactButton from './components/FactButton';
import FactDisplay from './components/FactDisplay';
import AnimatedEmoji from './components/AnimatedEmoji';
import { facts } from './facts';
import './App.css';

function App() {
  const [currentFact, setCurrentFact] = useState('Click the button to get a fact!');
  const [emojis, setEmojis] = useState([]);
  const buttonRef = useRef(null);

  const getRandomEmoji = () => {
    const emojiRange = [0x1F600, 0x1F64F]; // Emoticons (facial expressions)
    const emojiCode = Math.floor(Math.random() * (emojiRange[1] - emojiRange[0] + 1)) + emojiRange[0];
    return String.fromCodePoint(emojiCode);
  };

  const getNewFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setCurrentFact(facts[randomIndex]);

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      const generateRandomTransform = () => {
        const x = Math.random() * 100; // 0 to 100% of screen width
        const y = Math.random() * 100; // 0 to 100% of screen height
        const r = (Math.random() - 0.5) * 720; // -360 to 360 degrees
        return { x: `${x}vw`, y: `${y}vh`, r: `${r}deg` };
      };

      const newEmoji = {
        id: Date.now(),
        char: getRandomEmoji(),
        startX: rect.left + rect.width / 2,
        startY: rect.top + rect.height / 2,
        randomDuration: Math.random() * 10 + 5, // 5 to 15 seconds
        randomDelay: 0, // No delay for immediate movement
        randomScale: Math.random() * 0.5 + 0.7, // 0.7 to 1.2
        t1: generateRandomTransform(),
        t2: generateRandomTransform(),
        t3: generateRandomTransform(),
        t4: generateRandomTransform(),
      };
      setEmojis((prevEmojis) => [...prevEmojis, newEmoji]);
    }
  };

  return (
    <div className="App">
      <div className="fact-container">
        <FactButton onClick={getNewFact} ref={buttonRef} />
        <FactDisplay fact={currentFact} />
      </div>
      {emojis.map((emoji) => (
        <AnimatedEmoji
          key={emoji.id}
          id={emoji.id}
          emoji={emoji.char}
          startX={emoji.startX}
          startY={emoji.startY}
          randomDuration={emoji.randomDuration}
          randomDelay={emoji.randomDelay}
          randomScale={emoji.randomScale}
          t1={emoji.t1}
          t2={emoji.t2}
          t3={emoji.t3}
          t4={emoji.t4}
        />
      ))}
    </div>
  );
}

export default App;