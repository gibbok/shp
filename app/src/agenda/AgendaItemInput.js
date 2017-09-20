import React from 'react'
import './AgendaItemInput.css'

const AgendaItemInput = ({id, order, name, onKeyPressItem}) => {
  return (
    <div className='agenda__content__item__input'>
      <div className='agenda__content__item__input__order'>{order}</div>
      <input
        type='text'
        className='agenda__content__item__input__name'
        name='name'
        placeholder='Enter a new agenda item ...'
        onKeyPress={event => onKeyPressItem(event)}
        />
    </div>
  )
}

export default AgendaItemInput
