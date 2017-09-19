 import React from 'react'
 import NavigationItem from './NavigationItem'

 const Navigation = ({agendaNavigation}) => {
   if (!agendaNavigation) {
     return null
   }
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

// class Navigation extends Component {
//   render () {
//     debugger
//     return (<div>Navigation here</div>)
//   }
//   // render () {
//   //   const data = this.props.agendaNavigation
//   //   const navigationItems = data.map(item => {
//   //     return (
//   //       <NavigationItem
//   //         id={item.id}
//   //         name={item.name}
//   //         isActive={item.isActive}
//   //         tooltip={item.tooltip}
//   //       />
//   //     )
//   //   })
//   //   return (
//   //     <div className='navigation'>
//   //       {navigationItems}
//   //     </div>
//   //   )
//   // }
// }

 export default Navigation
