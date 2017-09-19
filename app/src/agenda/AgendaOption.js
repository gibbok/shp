import React from 'react'

const AgendaOption = ({id, name, isActive, src}) => {
  return (
    <div>
      <div>
        {id}
      </div>
      <div>
        {name}
      </div>
      <div>
        {isActive}
      </div>
      <div>
        {src}
      </div>
    </div>
  )
}

export default AgendaOption
