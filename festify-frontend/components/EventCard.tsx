import Link from 'next/link'


export default function EventCard({ event }: { event: any }) {
return (
<Link href={`/events/${event._id}`}>
<div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition">
<img
src={event.image || 'https://placehold.co/600x400'}
className="w-full h-40 object-cover"
/>
<div className="p-4">
<h2 className="text-xl font-semibold">{event.title}</h2>
<p className="text-sm text-gray-400">{event.location}</p>
</div>
</div>
</Link>
)
}