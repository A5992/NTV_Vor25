import React, { useState, useRef } from "react";
import "./App.css";

const shrekQuotes = [
  { text: "Ogres are like onions... they have layers!", sound: "layers.mp3" },
  { text: "What are you doing in my swamp?", sound: "inmyswamp.mp3" },
  { text: "Better out than in, I always say!", sound: "outin.mp3" },
  {
    text: "That's not very nice. It's just a donkey.",
    sound: "justadonkey.mp3",
  },
  { text: "This is the part where you run away.", sound: "runaway.mp3" },
];

export default function App() {
  const [quote, setQuote] = useState("What are you doing in my swamp?");
  const [inputText, setInputText] = useState("");
  const [secondaryInput, setSecondaryInput] = useState("");
  const [lastKey, setLastKey] = useState("");
  const [focused, setFocused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  
  const audioRef = useRef(null);

  const handleQuote = () => {
    if (audioRef.current && !audioRef.current.paused) return;

    const random = shrekQuotes[Math.floor(Math.random() * shrekQuotes.length)];
    setQuote(random.text);

    const newAudio = new Audio(`/sounds/${random.sound}`);
    audioRef.current = newAudio;
    newAudio.play();
  };

  return (
<div className="swamp" onClick={() => setAudioUnlocked(true)}>

      <div className="profile-pic-wrapper">
        <img src="/shrek.jpg" alt="Shrek" className="floating-shrek" />
      </div>

      <h1>Welcome to Shrek's Swamp!</h1>
      <p className="quote">
        <em>{quote}</em>
      </p>

      <input
        type="text"
        placeholder="Donkey ?"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => setLastKey(e.key)}
        value={inputText}
        className={focused ? "focused" : ""}
      />

      <button onClick={handleQuote} className="quote-button">
        Click Me for a Shrek Quote!
      </button>

      <input
  type="text"
  placeholder="Shrek!"
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
  onChange={(e) => setSecondaryInput(e.target.value)}
  onKeyDown={(e) => setLastKey(e.key)}
  value={secondaryInput}
  className={focused ? "focused" : ""}
/>
<p>You typed: <strong>{secondaryInput}</strong></p>

      <p>
        Last key pressed: <strong>{lastKey}</strong>
      </p>

      <img
        src="/donkey.png"
        alt="Donkey"
        className={`donkey ${hovering ? "hovering" : ""}`}
        onMouseEnter={() => {
          setHovering(true);
          if (!audioUnlocked) return;
          if (audioRef.current && !audioRef.current.paused) return;

          const newAudio = new Audio("/sounds/talkdonkey.mp3");
          audioRef.current = newAudio;
          newAudio.play();
        }}
        onMouseLeave={() => setHovering(false)}
      />
    </div>
  );
}
