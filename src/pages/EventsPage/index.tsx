import React from 'react'
import EventCard from '../../components/EventCard'

interface EventsPageProps {}

const EventsPage: React.FC<EventsPageProps> = (): JSX.Element => {
  return <div className='eventPageWrapper w-full flex flex-wrap justify-center gap-4 px-4 py-8'>
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
  </div>
}

export default EventsPage