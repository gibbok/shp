import React from 'react'
import './AvailabilityCounter.css'

const AvailabilityCounter = ({agendaDocsTotal}) => {
  return (
    <div className='document__availability__counter'>Available documents ({agendaDocsTotal})</div>
  )
}

export default AvailabilityCounter
