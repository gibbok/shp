import React from 'react'
import Header from './Header'
import DropArea from './DropArea'
import Availability from './Availability'

const Document = ({isDocumentVisible}) => {
  if (!isDocumentVisible) {
    return null
  }
  return (
    <div>
      <Header />
      <DropArea />
      <Availability />
    </div>
  )
}

export default Document
