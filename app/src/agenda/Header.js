import React, { Component } from 'react'
import Title from './Title'
import Navigation from './Navigation'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Title />
        <Navigation />
      </div>
    )
  }
}

export default Header
