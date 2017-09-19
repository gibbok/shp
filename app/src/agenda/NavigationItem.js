import React from 'react'

const NavigationItem = ({id, name, isActive, tooltip}) => {
  const classActive = isActive ? 'navigationItem__name--active' : 'navigationItem__name'
  return (
    <div className='navigationItem'>
      <div className={classActive}>
        {name}
      </div>
    </div>
  )
}

export default NavigationItem
