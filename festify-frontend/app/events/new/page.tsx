'use client'


import { useState } from 'react'
import { createEvent } from '@/lib/api'


export default function CreateEventPage() {
const [form, setForm] = useState({
title: '',
artist: '',
location: '',
date: '',
description: '',
image: '',
})


async function handleSubmit(e: any) {
e.preventDefault()
try {
await createEvent(form)
alert('Event created!')
// Optionally redirect to home
} catch (error) {
alert('Failed to create event')
}
}


return (
<form onSubmit={handleSubmit} className="max-w-xl space-y-4">
<h1 className="text-2xl font-bold">Create Event</h1>


<input
placeholder="Title"
value={form.title}
onChange={(e) => setForm({ ...form, title: e.target.value })}
className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
/>
<input
placeholder="Artist"
value={form.artist}
onChange={(e) => setForm({ ...form, artist: e.target.value })}
className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
/>
<input
placeholder="Location"
value={form.location}
onChange={(e) => setForm({ ...form, location: e.target.value })}
className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
/>
<input
type="datetime-local"
placeholder="Date"
value={form.date}
onChange={(e) => setForm({ ...form, date: e.target.value })}
className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
/>
<textarea
placeholder="Description"
value={form.description}
onChange={(e) => setForm({ ...form, description: e.target.value })}
className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
/>
<input
placeholder="Image URL"
value={form.image}
onChange={(e) => setForm({ ...form, image: e.target.value })}
className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
/>


<button className="bg-purple-600 px-4 py-2 rounded">Create</button>
</form>
)
}