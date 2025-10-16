export default function Wallet(){
  return (
    <div className="grid gap-4">
      <div className="card"><h2 className="text-xl">Wallet</h2><div className="text-neutral-400">Balance: 153.2 USDT</div></div>
      <div className="card"><h3 className="text-lg mb-2">Deposit</h3><div className="text-neutral-400">Choose asset & chain → show address/QR.</div></div>
      <div className="card"><h3 className="text-lg mb-2">Withdraw</h3><div className="text-neutral-400">Min 50 USDT; fee 1% + gas split 50/50.</div></div>
    </div>
  )
}
