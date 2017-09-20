 import React from 'react'
 import NavigationItem from './NavigationItem'
 import './Navigation.css'

 const Navigation = ({agendaNavigation}) => {
   const navigationItems = agendaNavigation.map(item => {
     return (
       <NavigationItem
         key={item.id}
         id={item.id}
         name={item.name}
         isActive={item.isActive}
         tooltip={item.tooltip}
        />
     )
   })
   return (
     <div className='agenda__navigation'>
       {navigationItems}
     </div>
   )
 }

 export default Navigation
