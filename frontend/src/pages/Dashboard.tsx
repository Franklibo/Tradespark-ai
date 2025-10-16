import { Link } from 'react-router-dom'

export default function Dashboard(){
  return (
    <div className="grid gap-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat title="Balance (USDT)" value="153.20" />
        <Stat title="Lifetime Profit" value="+42.80" />
        <Stat title="Clicks Available" value="12" />
        <Stat title="Plan" value="Basic" />
      </div>
      <div className="card">
        <h2 className="text-xl mb-3">Run AI Trade</h2>
        <Link to="/trade" className="btn">Run AI Trade</Link>
      </div>
      <div className="card">
        <h2 className="text-xl mb-3">Recent Activity</h2>
        <ul className="text-sm text-neutral-300 space-y-1">
          <li>+2.5 USDT · Win</li>
          <li>-0.3 USDT · Loss</li>
          <li>+1.8 USDT · Win</li>
        </ul>
      </div>
    </div>
  )
}

function Stat({title, value}:{title:string; value:string}){
  return (
    <div className="card">
      <div className="text-neutral-400 text-sm">{title}</div>
      <div className="mt-1 text-2xl font-bold text-[#D4AF37]">{value}</div>
    </div>
  )
}
