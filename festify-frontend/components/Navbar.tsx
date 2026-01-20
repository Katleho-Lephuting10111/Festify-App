import Link from 'next/link'


export default function Navbar() {
return (
<nav className="border-b border-zinc-800 p-4">
<div className="max-w-6xl mx-auto flex justify-between">
<Link href="/" className="font-bold">Festify</Link>
<Link href="/events/new" className="text-purple-400">Create Event</Link>
</div>
</nav>
)
}