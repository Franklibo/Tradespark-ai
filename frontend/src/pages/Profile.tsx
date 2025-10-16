export default function Profile(){
  return (
    <div className="grid gap-4">
      <div className="card"><h2 className="text-xl">Profile</h2><div className="text-neutral-400">WhatsApp: verified · Plan: Basic</div></div>
      <div className="card"><h3 className="text-lg mb-2">Security</h3><ul className="text-neutral-300 text-sm list-disc pl-5"><li>Reveal seed (PIN)</li><li>Change PIN</li></ul></div>
      <div className="card"><h3 className="text-lg mb-2">Notifications</h3><div className="text-neutral-400">WhatsApp alerts: ON/OFF</div></div>
    </div>
  )
}
