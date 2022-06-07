import React from 'react'
import HeaderBar from './../HeaderBar/HeaderBar'
import './Resume.css'
import MyResume from './TempResume.jpg'

export default function Resume() {
  return (
    <div>
      <HeaderBar />
      <div className='download'>
        <a href={MyResume} download> 
          <button className='button'>Download Resume</button>
        </a>
      </div>
      <div>
        <img src={MyResume} className='resume' alt="Missing" />
      </div>
      <div className='background' /> 
    </div>
  )
}