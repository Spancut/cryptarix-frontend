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

export default function Page() {
  const [tokens, setTokens] = useState<Token[]>([])

  useEffect(() => {
  fetch('https://cryptarix-api.onrender.com/tokens')
    .then((res) => res.json())
    .then((data) => {
      console.log('Fetched tokens:', data)
      setTokens(data)
    })
    .catch((err) => console.error('API error:', err))
}, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Token Dashboard</h1>
      {tokens.length === 0 ? (
        <p>No tokens found.</p>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Symbol</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price (USD)</th>
              <th className="border px-4 py-2">Alpha Score</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => (
              <tr key={token.symbol}>
                <td className="border px-4 py-2">{token.symbol}</td>
                <td className="border px-4 py-2">{token.name}</td>
                <td className="border px-4 py-2">${token.price_usd.toLocaleString()}</td>
                <td className="border px-4 py-2">{token.alpha_score.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
