import React from 'react'
import './UTK.css'
import UTKPic from './UTKFam.jpg'

export default function UTK() {
  return (
    <div>
      <img className='utk-picture' src={UTKPic} alt='Missing' />
      <p className='utk-school'>University of Tennessee Knoxville</p>
      <div className='utk-text'>
        <p>
          UTK is where I am currently studying for an undergraduate degree in 
          Computer Science and Mathematics. In addition to school, I've been 
          involved in various extra curricular activities, including: Toastmasters, 
          swim club, rock climbing club, fraternity life, wakeboard club, outdoors 
          club, and frequently go to the gym.
        </p>
      </div>
    </div>
  )
}
