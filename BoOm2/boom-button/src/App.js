import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  // Load from localStorage or use defaults
  const getInitialStep = () => parseInt(localStorage.getItem("step")) || 5;
  const getInitialLimit = () => parseInt(localStorage.getItem("limit")) || 35;

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(getInitialStep);
  const [limit, setLimit] = useState(getInitialLimit);

  // Update localStorage on changes
  useEffect(() => {
    localStorage.setItem("step", step);
  }, [step]);

  useEffect(() => {
    localStorage.setItem("limit", limit);
  }, [limit]);

  const increment = () => setCounter(prev => prev + step);
  const decrement = () => setCounter(prev => prev - step);

  const isBoom = counter > limit || counter < -limit;

  return (
    <div className={`container ${isBoom ? 'shake' : ''}`}>
      <p className="counter">{counter}</p>

      <div className="buttons">
        <button className="button increment" onClick={increment}>+</button>
        <button className="button decrement" onClick={decrement}>−</button>
      </div>

      {isBoom && <div className="message">bBOÖmM</div>}

      <div className="settings">
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(parseInt(e.target.value) || 1)}
          />
        </label>
        <label>
          Limit:
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(Math.abs(parseInt(e.target.value) || 1))}
          />
        </label>
      </div>
    </div>
  );
}
