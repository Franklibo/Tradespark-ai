import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import pino from 'pino'
import mongoose from 'mongoose'
import authRoutes from './api/auth.routes.js'
import tradeRoutes from './api/trade.routes.js'
import walletRoutes from './api/wallet.routes.js'

const app = express()
const log = pino({ transport: { target: 'pino-pretty' } })

app.use(express.json())
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
app.use(helmet())

app.get('/health', (_req,res)=> res.json({ ok:true, name:'Tradespark API' }))

app.use('/api/auth', authRoutes)
app.use('/api/trade', tradeRoutes)
app.use('/api/wallet', walletRoutes)

const PORT = process.env.PORT || 8080
const MONGO = process.env.MONGODB_URI!

mongoose.connect(MONGO).then(()=>{
  log.info('Mongo connected')
  app.listen(PORT, ()=> log.info(`API on :${PORT}`))
}).catch(err=>{
  log.error(err, 'Mongo connect failed')
  process.exit(1)
})
