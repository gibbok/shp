import React from 'react'
import './AgendaItemInput.css'

const AgendaItemInput = ({id, order, name, onKeyPressItem}) => {
  return (
    <div className='agenda__content__item__input'>
      <div className='agenda__content__item__input__order'>
        <div className='agenda__content__item__input__order__value'>
          {order}
        </div>
      </div>
      <input
        maxLength={128}
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
