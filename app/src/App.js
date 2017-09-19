import React, { Component } from 'react'
import Agenda from './agenda/Agenda'
import DocumentContainer from './document/DocumentContainer'
import Footer from './agenda/Footer'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Agenda />
        <DocumentContainer />
        <Footer />
      </div>
    )
  }
}

export default App
