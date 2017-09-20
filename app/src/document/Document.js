import React from 'react'
import Header from './Header'
import DropArea from './DropArea'
import AvailabilityContainer from './AvailabilityContainer'
import AvailabilityDocsContainer from './AvailabilityDocsContainer'
import Search from './Search'
import './Document.css'

const Document = ({isDocumentVisible}) => {
  if (!isDocumentVisible) {
    return null
  }
  return (
    <div className='document'>
      <Header />
      <DropArea />
      <AvailabilityContainer />
      <Search />
      <AvailabilityDocsContainer />
    </div>
  )
}

export default Document
