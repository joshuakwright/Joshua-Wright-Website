import React from 'react'
import './CPA.css'
import CPAPic from './CPA.jpg'

export default function CPA() {
  return (
    <div>
      <img className='cpa-picture' src={CPAPic} alt='Missing' />
      <span className='cpa-school'>Christ Presbyterian Academy</span>
      <div className='cpa-paragraph'>
        <p>
          CPA is where I attended preschool, elementary school, middle school, 
          and high school for 16 years. This is where I became an Eagle Scout 
          and competed in mountain biking, cross country, track, and swimming. 
          Here, I also took 13 AP classes, was a member of the National Honors 
          Society (serving as an officer for one year), and was inducted into 
          the Cum Laude society. 
        </p>
      </div>
    </div>
  )
}
