import React from 'react'
import {createActiveCssClass} from '../utility'
import './AgendaItem.css'

const AgendaItem = ({id, order, name, hasDocs}) => {
  console.log(hasDocs)
  const classOrder = createActiveCssClass('agenda__content__item__order', hasDocs)
  const className = createActiveCssClass('agenda__content__item__name', hasDocs)
  return (
    <div className='agenda__content__item'>
      <div className={classOrder}>{order}</div>
      <div className={className}>{name}</div>
    </div>
  )
}

export default AgendaItem
