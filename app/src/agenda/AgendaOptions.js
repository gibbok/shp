import React from 'react'
import AgendaOption from './AgendaOption'

const AgendaOptions = ({agendaOptions}) => {
  const agendaOptionsComponents = agendaOptions.map(item => {
    return (
      <AgendaOption
        key={item.id}
        id={item.id}
        name={item.name}
        isActive={item.isActive}
        src={item.src}
      />
    )
  })
  return (
    <div>{agendaOptionsComponents}</div>
  )
}

export default AgendaOptions
