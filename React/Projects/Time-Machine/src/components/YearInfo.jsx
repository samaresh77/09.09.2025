import React, { useEffect, useState } from "react";

const fallbackData = {
  1969: "🌕 Apollo 11 lands on the Moon — one giant leap for mankind.",
  1995: "💻 The web begins to explode into public use — the early Internet era.",
  2025: "🤖 A mash of AI-driven tools reshape daily life and development.",
  2090: "🚀 Speculative: interplanetary exploration accelerates; tentative lunar & Mars bases appear.",
  1984: "📺 Technology & pop culture: VCRs, early video games, bright colors.",
};

export default function YearInfo({ year, onBack }) {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);
  const [sourceUrl, setSourceUrl] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setSummary(null);
    setSourceUrl(null);

    // Try Wikipedia REST summary endpoint: /page/summary/{title}
    // For a year like 1969, the page title is "1969"
    const encoded = encodeURIComponent(String(year));
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;

    fetch(url, {
      headers: {
        // polite user-agent
        "Api-User-Agent": "TimeMachine/1.0 (example@example.com)"
      }
    })
      .then((r) => {
        if (!r.ok) throw new Error("No wiki page");
        return r.json();
      })
      .then((data) => {
        if (!mounted) return;
        // data.extract gives a short summary
        if (data && data.extract) {
          setSummary(data.extract);
          setSourceUrl(data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encoded}`);
        } else {
          // fallback to our small dataset
          setSummary(fallbackData[year] || null);
        }
      })
      .catch((_) => {
        if (!mounted) return;
        setSummary(fallbackData[year] || null);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => (mounted = false);
  }, [year]);

  const y = Number(year);
  const fallbackText =
    (!summary && y < 1900)
      ? "⚔️ Ancient times — early civilizations and legend."
      : (!summary && y < 2000)
      ? "📜 20th century — rapid industry, war, and breakthroughs."
      : (!summary && y >= 2000)
      ? "🚀 The future — fast-change, unknown inventions."
      : null;

  return (
    <div>
      <h3 className="year-title">Year {year}</h3>

      {loading && <p className="year-desc">Loading facts…</p>}

      {!loading && summary && <p className="year-desc">{summary}</p>}

      {!loading && !summary && <p className="year-desc">{fallbackText}</p>}

      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <button className="btn go-back" onClick={onBack}>Go Back</button>
        {sourceUrl && (
          <a className="btn" style={{ textDecoration: "none" }} href={sourceUrl} target="_blank" rel="noreferrer">
            Read more
          </a>
        )}
      </div>
    </div>
  );
}
