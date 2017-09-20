import React from 'react'
import './SeparatorVertical.css'

const SeparatorVertical = ({id, width, height}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`
  }
  return (
    <div id={id} style={style} className='separatorVertical'>
      <div className='separatorVertical__line' />
    </div>
  )
}

export default SeparatorVertical
