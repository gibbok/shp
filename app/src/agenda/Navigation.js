 import React from 'react'
 import NavigationItem from './NavigationItem'

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
     <div>
       {navigationItems}
     </div>
   )
 }

 export default Navigation
