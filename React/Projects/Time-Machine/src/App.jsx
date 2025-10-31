import React, { useState } from "react";
import { motion } from "framer-motion";
import TimeTunnel from "./components/TimeTunnel.jsx";
import YearInfo from "./components/YearInfo.jsx";
import "./styles.css";

function App() {
  const [year, setYear] = useState("");
  const [traveling, setTraveling] = useState(false);
  const [destination, setDestination] = useState(null);

  const handleTravel = () => {
    if (!year) return;
    setTraveling(true);
    setTimeout(() => {
      setTraveling(false);
      setDestination(year);
    }, 4000); // 4s animation
  };

  return (
    <div className="container">
      {!traveling && !destination && (
        <>
          <h1>🕰️ TIME MACHINE</h1>
          <p>Enter a year and start your journey!</p>
          <input
            type="number"
            placeholder="e.g. 1969 or 2090"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button onClick={handleTravel}>TRAVEL</button>
        </>
      )}

      {traveling && <TimeTunnel />}

      {destination && !traveling && (
        <YearInfo year={destination} onBack={() => setDestination(null)} />
      )}
    </div>
  );
}

export default App;
