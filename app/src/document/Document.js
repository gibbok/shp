import React from 'react'
import Header from './Header'

const Document = ({isDocumentVisible}) => {
  if (!isDocumentVisible) {
    return null
  }
  return (
    <div>
      <Header />
    </div>
  )
}

export default Document
