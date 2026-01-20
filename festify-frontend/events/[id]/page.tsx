import { getEventById } from '@/lib/api'


export default async function EventDetails({ params }: any) {
const event = await getEventById(params.id)


if (!event) return <p>Event not found</p>


return (
<section className="space-y-4">
<img
src={event.image}
alt={event.title}
className="w-full max-h-[400px] object-cover rounded-xl"
/>
<h1 className="text-3xl font-bold">{event.title}</h1>
<p className="text-gray-400">{event.location}</p>
<p>{new Date(event.date).toDateString()}</p>
<p className="text-gray-300">{event.description}</p>
</section>
)
}