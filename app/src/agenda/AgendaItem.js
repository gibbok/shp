import React from 'react'
import {createActiveCssClass} from '../utility'
import './AgendaItem.css'

const AgendaItem = ({id, order, name, hasDocs}) => {
  const classOrder = createActiveCssClass('agenda__content__item__order', hasDocs)
  const className = createActiveCssClass('agenda__content__item__name', hasDocs)
  const classItem = createActiveCssClass('agenda__content__item', hasDocs)
  return (
    <div className={classItem}>
      <div className={classOrder}>
        <div className='agenda__content__item__order__value'>
          {order}
        </div>
      </div>
      <div className={className}>{name}</div>
    </div>
  )
}

export default AgendaItem
