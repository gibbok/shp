import React, { Component } from 'react'
import Title from './Title'
import NavigationContainer from './NavigationContainer'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Title />
        <NavigationContainer />
      </div>
    )
  }
}

export default Header
