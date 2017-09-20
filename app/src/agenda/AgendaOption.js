import React from 'react'
import iconSend from './icon-send.png'
import iconReload from './icon-reload.png'
import iconDownload from './icon-download.png'
import iconAddDoc from './icon-add-doc.png'
import iconAddAgendaItem from './icon-add-agenda-item.png'
import './AgendaOption.css'

const loadIcon = (src) => {
  switch (src) {
    case 'iconSend':
      return iconSend
    case 'iconReload':
      return iconReload
    case 'iconDownload':
      return iconDownload
    case 'iconAddDoc':
      return iconAddDoc
    case 'iconAddAgendaItem':
      return iconAddAgendaItem
  }
}

const AgendaOption = ({id, name, isActive, src}) => {
  return (
    <div id={id} className='agendaOption'>
      <img src={loadIcon(src)} alt={name} />
    </div>
  )
}

export default AgendaOption
