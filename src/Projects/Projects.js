import React from 'react'
import HeaderBar from './../HeaderBar/HeaderBar'
import { Outlet } from 'react-router-dom'
import SideBar from './../SideBar/SideBar'
import './Projects.css'

export default function Projects() {
  const buttons = SideBar([
    { org: 'Project 1', url: 'project1' }, 
    { org: 'Project 2', url: 'project2' }, 
    { org: 'Project 3', url: 'project3' }, 
]);

  return (
    <div>
      <HeaderBar />
      <div>
        {buttons}
      </div>
      <Outlet/>
    </div>
  )
}
