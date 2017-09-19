import React from 'react'
import Header from './Header'
import DropArea from './DropArea'
import AvailabilityContainer from './AvailabilityContainer'
import Search from './Search'

const Document = ({isDocumentVisible}) => {
  if (!isDocumentVisible) {
    return null
  }
  return (
    <div>
      <Header />
      <DropArea />
      <AvailabilityContainer />
      <Search />
    </div>
  )
}

export default Document
