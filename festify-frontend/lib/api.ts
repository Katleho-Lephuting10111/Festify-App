const API = process.env.NEXT_PUBLIC_API_URL


export async function getEvents() {
const res = await fetch(`${API}/events`, { cache: 'no-store' })
if (!res.ok) throw new Error('Failed to fetch events')
return res.json()
}


export async function getEventById(id: string) {
const res = await fetch(`${API}/events/${id}`)
if (!res.ok) throw new Error('Event not found')
return res.json()
}


export async function createEvent(data: any) {
const res = await fetch(`${API}/events`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data),
})
if (!res.ok) throw new Error('Failed to create event')
return res.json()
}