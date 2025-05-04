// CRYPTARIX Frontend - Next.js + Tailwind CSS
// Token leaderboard page

'use client'
import { useEffect, useState } from 'react'

type Token = {
  symbol: string
  name: string
  price_usd: number
  alpha_score: number
}

export default function Home() {
  const [tokens, setTokens] = useState<Token[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tokens`)
      .then(res => res.json())
      .then(data => setTokens(data))
      .catch(err => console.error('API error:', err))
  }, [])

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Token Dashboard</h1>
      {tokens.map((token) => (
        <div key={token.symbol} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{token.name} ({token.symbol})</h2>
          <p>Price (USD): ${token.price_usd.toFixed(2)}</p>
          <p>Alpha Score: {token.alpha_score.toFixed(2)}</p>
        </div>
      ))}
    </main>
  )
}
