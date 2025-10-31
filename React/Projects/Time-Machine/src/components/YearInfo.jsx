import React from "react";

const historyData = {
  1969: "🌕 Apollo 11 lands on the Moon — one giant leap for mankind.",
  1995: "💻 The web begins to explode into public use — the early Internet era.",
  2025: "🤖 A mash of AI-driven tools reshape daily life and development.",
  2090: "🚀 Interplanetary exploration accelerates; tentative lunar & Mars bases appear.",
  1984: "📺 Technology & pop culture: VCRs, early video games, bright colors."
};

export default function YearInfo({ year, onBack }) {
  const y = Number(year);
  const info =
    historyData[year] ||
    (y < 1900
      ? "⚔️ Ancient times — early civilizations and legend."
      : y < 2000
      ? "📜 20th century — rapid industry, war, and breakthroughs."
      : "🚀 The future — fast-change, unknown inventions.");

  return (
    <div>
      <h3 className="year-title">Year {year}</h3>
      <p className="year-desc">{info}</p>
      <button className="btn go-back" onClick={onBack}>Go Back</button>
    </div>
  );
}
