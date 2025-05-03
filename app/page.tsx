// CRYPTARIX Frontend - Next.js + Tailwind CSS
// Token leaderboard page

"use client";

import { useEffect, useState } from "react";

interface Token {
  symbol: string;
  name: string;
  price_usd: number;
  alpha_score: number;
}

export default function Home() {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/tokens")
      .then((res) => res.json())
      .then((data) => setTokens(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <main className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-[#00F5D4]">
        CRYPTARIX: Alpha Leaderboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tokens.map((token, i) => (
          <div
            key={i}
            className="bg-[#0D0D0D] p-5 rounded-xl border border-[#00F5D4] shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-2">
              {token.name} <span className="text-sm text-gray-400">({token.symbol})</span>
            </h2>
            <p className="text-lg">💰 Price: ${token.price_usd}</p>
            <p className="text-lg">📈 AlphaScore: {token.alpha_score}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
