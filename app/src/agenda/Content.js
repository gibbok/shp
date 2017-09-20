import React from 'react'
import AgendaItem from './AgendaItem'
import AgendaItemInput from './AgendaItemInput'
import './Content.css'

const Content = ({agendaItems, onKeyPressItem}) => {
  const items = agendaItems.map(item => {
    if (item.isReadOnly) {
      return (
        <AgendaItem
          key={item.id}
          id={item.id}
          order={item.order}
          name={item.name}
          hasDocs={item.hasDocs}
        />
      )
    } else {
      return (
        <AgendaItemInput
          key={item.id}
          id={item.id}
          order={item.order}
          name={item.name}
          onKeyPressItem={onKeyPressItem}
       />
      )
    }
  })
  return (
    <div className='agenda__content'>
      {items}
    </div>
  )
}

export default Content
