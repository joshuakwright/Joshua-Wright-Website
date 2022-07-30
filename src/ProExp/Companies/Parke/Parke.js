import React from 'react'
import './Parke.css'
import ParkPic from './ParkeWNato.jpg'

export default function Park() {
  return (
    <div>
      <img className='parke-picture' src={ParkPic} alt='Missing' />
      <p className='parke-company'>The Parke Company</p>
      <div className='parke-text'>
        <p>
          Parke company is a landscaping / tree removal business based 
          out of Nashville, TN. While I was here, I was mostly working 
          on a chipper truck driving around Nashville chipping up piles 
          of brush people leave on the side of the road, as well as the 
          occasional location based job, and chainsaw operation. This 
          involved operating the chipper and winch system to load and 
          chip up piles of brush anywhere from a few handfuls to piles 
          the size of a bus. While this was definitely not a technical 
          job, it taught me a great deal about hard work (doing this 
          from 6:30 - 5:30 in the summer isn't exactly easy) and 
          communication, as I was sometimes paired with workers that I 
          didn't share a common language with. While it wouldn't be my 
          choice career, the time I spent here gave me a deep understanding 
          and appreciation for the value of manual labor and those doing it. 
        </p>
      </div>
    </div>
  )
}
