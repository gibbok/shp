
import React from 'react'
import AvailabilityCounter from './AvailabilityCounter'
import AvailabilityDocs from './AvailabilityDocs'

const Availability = ({agendaDocsTotal, agendaDocs, onClickDocumentItem}) => {
  return (
    <div>
      <div>
        <AvailabilityCounter
          agendaDocsTotal={agendaDocsTotal}
        />
      </div>
      <div>
        <AvailabilityDocs
          agendaDocs={agendaDocs}
          onClickDocumentItem={onClickDocumentItem}
        />
      </div>
    </div>
  )
}

export default Availability
