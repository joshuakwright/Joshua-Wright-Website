import React from 'react'
import './Cisco.css'
import CiscoSign from './CiscoSign.jpg'

export default function Cisco() {
  return (
    <div>
      <img className='cisco-picture' src={CiscoSign} alt='Missing' />
      <p className='cisco-company'>Cisco</p>
      <div className='cisco-text'>
        <p>
          I have nothing but love for my time at Cisco. When I was there, 
          my work revolved around two main projects: automating the testing 
          for Cisco's Spitfire class router and porting over test cases from the 
          previous class of router to work with Spitfire. Through these projects 
          I've learned about network protocols functionality / implementation, testing 
          automation, routing systems, and furthered my understanding of python. 
        </p>
        <p>
          My main project, automating the testing framework for the Spitfire routers, 
          involved a few aspects: understanding the current framework for testing, 
          linking the topology of the Spitfire routers to that of the testing framework, 
          and most importantly, ensuring proper sanitation of the environment once the 
          testing has completed. Once I completed that project, testing went from a 
          cumbersome and sometimes lengthy process to automated nightly testing at the 
          click of a button.
        </p>
        <p>
          In parallel to working on that project, I was updating test cases 
          from an older class of router to work with Spitfire. Before my time at
           Cisco I had relatively little knowledge on networking. So in order to 
           properly update the test cases, I have done three things: research and 
           understand the networking protocol that is being tested, study documentation 
           on various functionalities the router uses to implement these protocols, 
           and gain a thorough understanding of Cisco's in house testing software. 
           By doing this for each test case, which can vary from testing protocols 
           like IGMP to non-protocol processes the router must perform, I have been 
           able to fix issues such as updating the semantics of command line arguments 
           to adding in entire new functionalities required by the protocol/router to work. 
        </p>
      </div>
    </div>
  )
}
