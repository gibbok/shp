import React from 'react'
import Publish from './Publish'
import AgendaOptionsContainer from './AgendaOptionsContainer'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_publish'>
        <Publish />
      </div>
      <div>
        <AgendaOptionsContainer />
      </div>
    </div>
  )
}

export default Footer
