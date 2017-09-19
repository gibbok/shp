import React, { Component } from 'react'
import Header from './Header'
import NavigationContainer from './NavigationContainer'

class Agenda extends Component {
  render () {
    return (
      <div className='agenda'>
        <Header />
        <NavigationContainer />
      </div>
    )
  }
}

export default Agenda
