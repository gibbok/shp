import React from 'react'
import './Footer.css'
import select from './assets/select.png'
import Button from '../shared/Button'

const Footer = ({onClickButton}) => {
  return (
    <div className='document__footer'>
      <div className='document__footer__agenda'>Agenda item</div>
      <div className='document__footer__menu'><img src={select} /></div>
      <div className='document__footer__add'>
        <Button label={'Add'} width={93} height={35} onClickButton={onClickButton} />
      </div>
    </div>
  )
}
export default Footer
