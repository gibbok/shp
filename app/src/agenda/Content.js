import React from 'react'
import AgendaItem from './AgendaItem'

const Content = ({agendaItems}) => {
  const items = agendaItems.map(item => {
    return (
      <AgendaItem
        key={item.id}
        id={item.id}
        order={item.order}
        name={item.name}
        isReviewed={item.isReviewed}
        />
    )
  })
  return (
    <div className='agenda__content'>
      {items}
    </div>
  )
}

export default Content
