import React, { useState } from "react";
import TimeTunnel from "./components/TimeTunnel";
import YearInfo from "./components/YearInfo";
import { motion } from "framer-motion";

export default function App() {
  const [year, setYear] = useState("");
  const [traveling, setTraveling] = useState(false);
  const [destination, setDestination] = useState(null);

  const startTravel = () => {
    if (!year) return;
    setTraveling(true);
    setDestination(null);
    // Travel time matches TimeTunnel animation (4.2s)
    setTimeout(() => {
      setTraveling(false);
      setDestination(year);
    }, 4200);
  };

  const reset = () => {
    setDestination(null);
    setYear("");
  };

  return (
    <div className="app">
      <div className="canvas-container">
        <TimeTunnel isActive={traveling} />
      </div>

      <div className="ui">
        <h1>🕰️ TIME MACHINE</h1>
        <p>Enter a year and launch the time tunnel — past or future.</p>

        <div className="input-row">
          <input
            type="number"
            placeholder="e.g. 1969 or 2090"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button className="btn" onClick={startTravel}>TRAVEL</button>
        </div>

        <div className="small">
          Tip: try years like 1969, 1995, 2025, 2090 — or your birth year ✨
        </div>
      </div>

      {destination && !traveling && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="info-panel"
        >
          <YearInfo year={destination} onBack={reset} />
        </motion.div>
      )}
    </div>
  );
}
