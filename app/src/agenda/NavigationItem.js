import React from 'react'
import './NavigationItem.css'

const NavigationItem = ({id, name, isActive, tooltip}) => {
  const navigationItem = isActive ? 'agenda__navigationItem--active' : 'agenda__navigationItem'
  const navigationValue = isActive ? 'agenda__navigationItem__name--active' : 'agenda__navigationItem__name'
  return (
    <div className={navigationItem}>
      <div className={navigationValue}>
        {name}
      </div>
    </div>
  )
}

export default NavigationItem
