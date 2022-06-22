import React from 'react'
import './Cisco.css'
import temp from './tempimg3.jpg'

export default function Cisco() {
  return (
    <div>
      <img className='cisco-picture' src={temp} alt='Missing' />
      <span className='cisco-company'>Cisco</span>
      <div className='cisco-text'>
        <p>
          I have nothing but love for my time at Cisco so far. Since I started, 
          my work has revolved around two main projects: automating the testing 
          for Cisco's Spitfire class router and porting over test cases from the 
          previous class of router to work with Spitfire. Through these projects 
          I've learned about network protocols functionality/implementation, testing 
          automation, routing systems, and furthered my understanding of python. 
        </p>
        <p>
          At the moment I am currently in the research stage with the testing 
          automation. But I plan to update this page as I progress further into 
          the project. It will involve a few aspects: understanding the current 
          framework for testing, linking the topology of the Spitfire routers to 
          that of the testing framework, and most importantly, ensuring proper 
          sanitation of the environment once the testing has completed.
        </p>
        <p>
          In parallel to working on this project, I have been updating test cases 
          from the older class of router to work with Spitfire. Before my time at
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
