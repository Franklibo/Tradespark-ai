import { Outlet, Link, useLocation } from 'react-router-dom'
import './index.css'

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-[#1A1A1A] px-6 py-4 flex items-center justify-between">
        <div className="text-[#D4AF37] font-extrabold tracking-wide">Tradespark AI</div>
        <nav className="space-x-4">
          <Link to="/" className={linkClass(location.pathname === '/')}>Dashboard</Link>
          <Link to="/history" className={linkClass(location.pathname.startsWith('/history'))}>History</Link>
          <Link to="/wallet" className={linkClass(location.pathname.startsWith('/wallet'))}>Wallet</Link>
          <Link to="/profile" className={linkClass(location.pathname.startsWith('/profile'))}>Profile</Link>
        </nav>
      </header>
      <main className="p-6 max-w-5xl mx-auto">
        <Outlet />
      </main>
      <footer className="px-6 py-10 text-center text-sm text-neutral-400">
        © Tradespark AI · MVP Starter
      </footer>
    </div>
  )
}

function linkClass(active:boolean){
  return "px-2 py-1 rounded " + (active ? "text-[#D4AF37]" : "text-neutral-300 hover:text-[#D4AF37]")
}
