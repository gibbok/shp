import React from 'react'
import Header from './Header'
import DropArea from './DropArea'
import AvailabilityCounterContainer from './AvailabilityCounterContainer'
import AvailabilityDocsContainer from './AvailabilityDocsContainer'
import Search from './Search'
import FooterContainer from './FooterContainer'
import './Document.css'

const Document = ({isDocumentVisible}) => {
  if (!isDocumentVisible) {
    return null
  }
  return (
    <div className='document'>
      <Header />
      <DropArea />
      <AvailabilityCounterContainer />
      <Search />
      <AvailabilityDocsContainer />
      <FooterContainer />
    </div>
  )
}

export default Document
