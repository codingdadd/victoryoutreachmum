import React from 'react'
import EventsEditor from './EventsEditor'
import ServicesEditor from './ServicesEditor'
import JoinUsEditor from './JoinUsEditor'

export default function AdminPage () {
  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
      <EventsEditor />
      <ServicesEditor />
      <JoinUsEditor />
    </div>
  )
}
