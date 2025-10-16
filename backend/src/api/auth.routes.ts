import { Router } from 'express'
const r = Router()

// Stubs for MVP scaffolding
r.post('/otp/send', (req,res)=>{
  // TODO: integrate WhatsApp Cloud API
  res.json({ ok:true, sent:true })
})
r.post('/otp/verify', (req,res)=>{
  // TODO: verify code and issue JWT
  res.json({ token: 'stub.jwt.token' })
})
r.post('/seed/issue', (req,res)=>{
  // TODO: return 12 words once and store encrypted
  res.json({ seed: ['twelve','seed','words','placeholder','only','for','demo','do','not','use','in','prod'] })
})
r.post('/pin/set', (req,res)=> res.json({ ok:true }))

export default r
