import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderBar from './../HeaderBar/HeaderBar'
import SideBar from './../SideBar/SideBar'
import './ProExp.css'


export default function ProExp() {
  const buttons = SideBar([
    { org: 'Cisco', url: 'cisco' }, 
    { org: 'Pilot', url: 'pilot' }, 
    { org: 'Parke', url: 'parke' }, 
    { org: 'Delivery Dudes', url: 'deliverydudes' }
]);

  return (
    <div>
      <HeaderBar/>
      <div>
        {buttons}
      </div>
      <Outlet/>
    </div>
  )
}
