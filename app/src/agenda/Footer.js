import React from 'react'
import Button from '../shared/Button'
import AgendaOptionsContainer from './AgendaOptionsContainer'
import './Footer.css'

const Footer = () => {
  return (
    <div className='agenda__footer'>
      <div className='agenda__footer__publish'>
        <Button label={'Publish'} width={120} height={35} onClickButton={() => {}} />
      </div>
      <div className='agenda__footer__options'>
        <AgendaOptionsContainer />
      </div>
    </div>
  )
}

export default Footer
