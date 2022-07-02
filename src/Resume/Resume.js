import React from 'react'
import HeaderBar from './../HeaderBar/HeaderBar'
import './Resume.css'
import ImgResume from './ImgResume.jpg'
import JoshuaWrightResume from './JoshuaWrightResume.pdf'

export default function Resume() {
  return (
    <div>
      <HeaderBar />
      <div className='download'>
        <a href={JoshuaWrightResume} download> 
          <button className='button'>Download Resume</button>
        </a>
      </div>
      <div>
        <img src={ImgResume} className='resume' alt="Missing" />
      </div>
      <div className='background' /> 
    </div>
  )
}