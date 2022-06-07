import React from 'react'
import HeaderBar from './../HeaderBar/HeaderBar'
import SideBar from './../SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import './Education.css'

export default function Education() {
  const buttons = SideBar([
    { org: 'University of Tennessee Knoxville', url: 'utk' }, 
    { org: 'Christ Presbyterian Academy', url: 'cpa' }, 
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
