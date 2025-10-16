import { Router } from 'express'
const r = Router()

r.post('/deposit/init', (req,res)=>{
  // TODO: return address/QR for selected asset/chain
  res.json({ address: 'TDEMO...ADDRESS', chain: 'TRON', asset: 'USDT' })
})

r.post('/withdraw', (req,res)=>{
  // TODO: create withdrawal request (REVIEW)
  res.json({ status: 'REVIEW' })
})

export default r
