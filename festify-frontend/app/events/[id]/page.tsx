import { getEventById } from '@/lib/api'
import { notFound } from 'next/navigation'

export default async function EventPage({ params }: { params: { id: string } }) {
  const event = await getEventById(params.id)

  if (!event) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-gray-400">{event.artist} • {event.location}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.description}</p>
      {event.image && <img src={event.image} alt={event.title} className="w-full max-w-md" />}
    </div>
  )
}