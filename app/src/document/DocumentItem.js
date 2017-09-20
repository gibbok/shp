import React from 'react'
import './DocumentItem.css'

const DocumentItem = ({id, fileName, fileUrl, onClickDocumentItem}) => {
  return (
    <div className='document__content__item' onClick={onClickDocumentItem}>
      {fileName}
    </div>
  )
}

export default DocumentItem
