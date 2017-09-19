import React from 'react'
import CloseIcon from '../shared/CloseIcon'
import Title from './Title'

const Header = () => {
  return (
    <div>
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
