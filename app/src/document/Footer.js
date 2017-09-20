import React from 'react'
import './Footer.css'
import select from './select.png'

const Footer = () => {
  return (
    <div className='document__footer'>
      <div className='document__footer__agenda'>Agenda item</div>
      <div className='document__footer__menu'><img src={select} /></div>
      <div className='document__footer__add'>
        <div className='document__footer__add__button'>Add</div>
      </div>
    </div>
  )
}
export default Footer
