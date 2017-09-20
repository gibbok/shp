import React from 'react'
import './AvailabilityCounter.css'

const AvailabilityCounter = ({agendaDocsTotal}) => {
  return (
    <div className='availabilityCounter'>Available documents ({agendaDocsTotal})</div>
  )
}

export default AvailabilityCounter
