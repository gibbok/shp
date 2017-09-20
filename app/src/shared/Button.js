import React from 'react'
import './Button.css'

const Button = ({label, width, height, onClickButton}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`
  }
    return (
    <div className='button' style={style} onClick={()=>onClickButton()}>{label}</div>
    )
  }
  
  export default Button
  