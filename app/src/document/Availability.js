
import React from 'react'
import AvailabilityDocsContainer from './AvailabilityDocsContainer'
import AvailabilityCounter from './AvailabilityCounter'

const Availability = ({agendaDocsTotal}) => {
  return (
    <div>
      <div>
        <AvailabilityCounter agendaDocsTotal={agendaDocsTotal} />
      </div>
      <div>
        <AvailabilityDocsContainer />
      </div>
    </div>
  )
}

export default Availability
