
import React from 'react'
import DocumentItem from './DocumentItem'

const AvailabilityDocs = ({agendaDocs, onClickDocumentItem}) => {
  const agendaDocsNotAssociated = agendaDocs.filter(item => {
    return item.isDeleted === false && item.agendaItemId === null
  })
  const documentItems = agendaDocsNotAssociated.map(doc => {
    return (
      <DocumentItem
        key={doc.id}
        id={doc.id}
        fileName={doc.fileName}
        fileUrl={doc.fileUrl}
        agendaItemId={doc.agendaItemId}
        isDeleted={doc.isDeleted}
        onClickDocumentItem={() => onClickDocumentItem(doc)}
      />
    )
  })
  return (
    <div>
      {documentItems}
    </div>
  )
}

export default AvailabilityDocs
