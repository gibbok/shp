import React from 'react'
import {createActiveCssClass} from '../utility'

const AgendaItem = ({id, order, name, isReviewed}) => {
  const classOrder = createActiveCssClass('agenda__content__item__order', isReviewed)
  const className = createActiveCssClass('agenda__content__item__name', isReviewed)
  return (
    <div className='agenda__content__item'>
      <div className={classOrder}>{order}</div>
      <div className={className}>{name}</div>
    </div>
  )
}

export default AgendaItem
