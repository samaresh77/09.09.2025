import React, { useState, useRef } from "react";
import TimeTunnel from "./components/TimeTunnel";
import YearInfo from "./components/YearInfo";
import { motion } from "framer-motion";

export default function App() {
  const [year, setYear] = useState("");
  const [traveling, setTraveling] = useState(false);
  const [destination, setDestination] = useState(null);
  const audioRef = useRef(null);

  // prepare Audio once
  if (!audioRef.current) {
    audioRef.current = new Audio("/sounds/timetravel.mp3");
    audioRef.current.preload = "auto";
    audioRef.current.volume = 0.9;
  }

  const startTravel = async () => {
    if (!year) return;
    setTraveling(true);
    setDestination(null);

    try {
      // restart audio
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // autoplay may be blocked — ignore, user can tap to play later
        console.warn("Autoplay prevented — user interaction required to hear sound.");
      });
    } catch (e) {
      console.warn("Audio play error", e);
    }

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

  // screenshot / share
  const handleScreenshot = () => {
    // locate the first canvas in the document (our Three.js renderer)
    const canvas = document.querySelector("canvas");
    if (!canvas) {
      alert("Canvas not found.");
      return;
    }
    const dataURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = `time-machine-${Date.now()}.png`;
    a.click();
  };

  return (
    <div className="app">
      <div className="canvas-container" role="img" aria-label="Time tunnel 3D scene">
        <TimeTunnel isActive={traveling} />
      </div>

      <div className="ui">
        <h1>🕰️ TIME MACHINE</h1>
        <p>Enter a year and launch the time tunnel — past or future.</p>

        <div className="input-row">
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            type="text"
            placeholder="e.g. 1969 or 2090"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button className="btn" onClick={startTravel} aria-pressed={traveling}>
            {traveling ? "Travelling..." : "TRAVEL"}
          </button>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button className="btn" onClick={handleScreenshot}>Save Screenshot</button>
          <button
            className="btn"
            onClick={() => {
              // toggle audio on/off (helpful on mobile if blocked)
              try {
                if (audioRef.current.paused) audioRef.current.play();
                else audioRef.current.pause();
              } catch (e) {}
            }}
          >
            Toggle Sound
          </button>
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
