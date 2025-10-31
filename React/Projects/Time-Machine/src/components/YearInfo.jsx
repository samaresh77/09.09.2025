import React from "react";

const historyData = {
  1969: "🌕 Apollo 11 lands on the Moon. Humanity takes its first step!",
  2025: "🤖 AI-powered world, innovation everywhere!",
  2090: "🚀 Humans begin colonizing Mars.",
  1995: "💻 The Internet starts to reach homes worldwide.",
};

export default function YearInfo({ year, onBack }) {
  const info =
    historyData[year] ||
    (year < 1900
      ? "⚔️ You’re far in the past! Ancient civilizations flourish."
      : "🚀 Welcome to the future! Unknown possibilities await...");

  return (
    <div>
      <h1>Year {year}</h1>
      <p>{info}</p>
      <button onClick={onBack}>Go Back</button>
    </div>
  );
}
