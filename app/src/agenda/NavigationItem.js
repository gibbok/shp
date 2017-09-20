import React from 'react'
import './NavigationItem.css'

const NavigationItem = ({id, name, isActive, tooltip}) => {
  const navigationItem = isActive ? 'navigationItem--active' : 'navigationItem'
  const navigationValue = isActive ? 'navigationItem__name--active' : 'navigationItem__name'
  return (
    <div className={navigationItem}>
      <div className={navigationValue}>
        {name}
      </div>
    </div>
  )
}

export default NavigationItem
