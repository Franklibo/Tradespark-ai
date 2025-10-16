import { Router } from 'express'
const r = Router()

r.post('/execute', (req,res)=>{
  // MVP simulated result
  const win = Math.random() < 0.75
  const amount = Number((Math.random() * (win ? 2.5 : 0.9)).toFixed(2))
  res.json({ status: win ? 'WIN' : 'LOSS', amount_usdt: amount })
})

export default r
