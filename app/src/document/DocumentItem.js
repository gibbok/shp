import React from 'react'

const DocumentItem = ({id, fileName, fileUrl, onClickDocumentItem}) => {
  return (
    <div onClick={onClickDocumentItem} style={{backgroundColor: 'gray', height: '50px', margin: '10px'}}>
      <div>{fileName}</div>
    </div>
  )
}

export default DocumentItem
