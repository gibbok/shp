import React from 'react'
import AgendaOption from './AgendaOption'
import SeparatorVertical from '../shared/SeparatorVertical'
import './AgendaOptions.css'

const AgendaOptions = ({agendaOptions}) => {
  const agendaOptionsComponents = agendaOptions.map(item => {
    if (item.type === 'icon') {
      return (
        <AgendaOption
          key={item.id}
          id={item.id}
          name={item.name}
          isActive={item.isActive}
          src={item.src}
      />
      )
    } else {
      return (
        <SeparatorVertical
          id={item.id}
          key={item.id}
        />
      )
    }
  })
  return (
    <div className='agendaOptions'>
      {agendaOptionsComponents}
    </div>
  )
}

export default AgendaOptions
