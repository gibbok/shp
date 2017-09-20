import React from 'react'
import iconSend from './assets/icon-send.png'
import iconReload from './assets/icon-reload.png'
import iconDownload from './assets/icon-download.png'
import iconAddDoc from './assets/icon-add-doc.png'
import iconAddAgendaItem from './assets/icon-add-agenda-item.png'
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
