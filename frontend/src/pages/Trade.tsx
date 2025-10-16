import { useEffect, useState } from 'react'

export default function Trade(){
  const [count, setCount] = useState(60)
  const [done, setDone] = useState(false)
  const [result, setResult] = useState<null | {status:'WIN'|'LOSS'; amount:number}>(null)

  useEffect(()=>{
    const t = setInterval(()=> setCount(c => c>0 ? c-1 : 0), 1000)
    const simulate = setTimeout(()=>{
      const win = Math.random() < 0.75
      const amount = parseFloat((Math.random() * (win ? 2.5 : 0.9)).toFixed(2))
      setResult({status: win ? 'WIN':'LOSS', amount})
      setDone(true)
    }, 6000) // shorter for demo
    return ()=>{ clearInterval(t); clearTimeout(simulate) }
  },[])

  if(!done){
    return (
      <div className="card">
        <h2 className="text-xl mb-2">AI is trading for you…</h2>
        <div className="text-neutral-400 mb-4">Time left: {count}s</div>
        <div className="h-24 rounded-xl border border-neutral-800 flex items-center justify-center text-neutral-500">
          Gold animated graph (placeholder)
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <h2 className="text-xl mb-2">Result</h2>
      {result?.status === 'WIN' ? (
        <div className="text-green-400 text-lg">🎉 Win! +{result.amount} USDT</div>
      ) : (
        <div className="text-red-400 text-lg">📉 Small loss −{result?.amount} USDT</div>
      )}
    </div>
  )
}
