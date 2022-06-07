import React from 'react'
import Pictures from './SlideShow/Pictures'
import HeaderBar from './../HeaderBar/HeaderBar'
import Description from './AboutMe/Description'
import './Home.css'

export default function Home() {
  return (
    <div>
        <HeaderBar />
        <div>
            <Pictures />
            <Description />
        </div>
    </div>
  )
}
