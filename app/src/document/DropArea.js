
import React from 'react'
import './DropArea.css'

const DropArea = () => {
  return (
    <div className='document__dropArea'>
      <div className='document__dropArea__drag'>
        <div className='document__dropArea__drag__sign'><i className='material-icons'>add</i></div>
        <div className='document__dropArea__drag__text'>Drop new documents here</div>
      </div>
      <div className='document__dropArea__browse'>
        or<span className='document__dropArea__browse__text'>Browser your computer</span>
      </div>
    </div>
  )
}

export default DropArea
