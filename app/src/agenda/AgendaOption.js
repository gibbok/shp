import React from 'react'
import iconSend from './icon-send.png'
import iconReload from './icon-reload.png'
import iconDownload from './icon-download.png'
import iconAddDoc from './icon-add-doc.png'
import iconAddAgendaItem from './icon-add-agenda-item.png'
import './AgendaOption.css'

let hashIcons = {
  iconSend,
  iconReload,
  iconDownload,
  iconAddDoc,
  iconAddAgendaItem
}

const AgendaOption = ({id, name, isActive, src}) => {
  return (
    <div id={id} className='agendaOption'>
      <img src={hashIcons[src]} alt={name} />
    </div>
  )
}

export default AgendaOption
