import React, { Component } from 'react'
import Agenda from './agenda/Agenda'
import Document from './document/Document'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Agenda />
        <Document />
      </div>
    )
  }
}

export default App
