import React from 'react'
import './DeliveryDudes.css'
import temp from './tempimg2.jpg'

export default function DeliveryDudes() {
  return (
    <div>
      <img className='dd-picture' src={temp} alt='Missing' />
      <p className='dd-company'>Delivery Dudes</p>
      <div className='dd-text'>
        <p>
          This was my first job, and it was fairly simple. I was 
          a food delivery person. I would receive an order, pick 
          up the food from a restaurant, check to make sure the 
          food matched what was on the order, calculate the correct 
          tax, and deliver it to the customer. 
        </p>
      </div>
    </div>
  )
}
