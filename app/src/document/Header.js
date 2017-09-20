import React from 'react'
import CloseIcon from '../shared/CloseIcon'
import Title from './Title'
import './Header.css'

const Header = () => {
  return (
    <div className='document__header'>
      <div>
        <Title />
      </div>
      <div>
        <CloseIcon />
      </div>
    </div>
  )
}

export default Header
