import React from 'react'
import Button from '../shared/Button'
import AgendaOptionsContainer from './AgendaOptionsContainer'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_publish'>
        <Button label={'Publish'} width={120} height={35} onClickButton={() => {}} />
      </div>
      <div className='footer_options'>
        <AgendaOptionsContainer />
      </div>
    </div>
  )
}

export default Footer
