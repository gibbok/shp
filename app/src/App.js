import React, { Component } from 'react'
import Agenda from './agenda/Agenda'
import DocumentContainer from './document/DocumentContainer'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Agenda />
        <DocumentContainer />
      </div>
    )
  }
}

export default App
