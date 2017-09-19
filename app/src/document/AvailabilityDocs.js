
import React from 'react'
import DocumentItem from './DocumentItem'

const AvailabilityDocs = ({agendaDocs, onClickDocumentItem}) => {
  const documentItems = agendaDocs.map(doc => {
    return (
      <DocumentItem
        key={doc.id}
        id={doc.id}
        fileName={doc.fileName}
        fileUrl={doc.fileUrl}
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
