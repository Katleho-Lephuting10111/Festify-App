import EventCard from '@/components/EventCard'
import { getEvents } from '@/lib/api'


export default async function HomePage() {
let events = []
try {
events = await getEvents()
} catch (error) {
console.error('Failed to fetch events:', error)
}


return (
<section>
<h1 className="text-3xl font-bold mb-6">🎶 Upcoming Events</h1>


{events.length === 0 && (
<p className="text-gray-400">No events yet. Create one!</p>
)}


<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{events.map((event: any) => (
<EventCard key={event._id} event={event} />
))}
</div>
</section>
)
}