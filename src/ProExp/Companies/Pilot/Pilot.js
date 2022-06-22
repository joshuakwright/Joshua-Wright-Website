import React from 'react'
import './Pilot.css'
import PilotPhoto from './PilotWorkPhoto.jpg'

export default function Pilot() {
  return (
    <div>
      <img className='pilot-picture' src={PilotPhoto} alt='Missing' />
      <span className='pilot-company'>Pilot</span>
      <div className='pilot-text'>
        <p>
          Pilot is where my career in software development began and where I 
          learned many of the practical coding skills I have today. Some of 
          those skills include: the SOLID principles of C#, website architecture,
           HTML, Javascript, CSS, C#, SQL, the MVC .NET platform, frontend and 
           backend development, a multitude of ideas behind writing clean, concise, 
           readable code, and most of the team work / communication skills needed 
           in a software development team. 
        </p>
        <p>
          When I started at Pilot, I knew nothing about web design and had only 
          brief experience with HTML. But through a combination of research, practice, 
          and extensive pair programming, I was able to learn all the skills needed 
          to be a fully competent member of my Full Stack DevOps team. 
        </p>
        <p>
          I worked on more projects than I can reasonably list here, so I'll highlight 
          a few. My whole first project was creating an API to fetch data from any of 
          Pilot's backstore computers. This was almost entirely done with pair 
          programming and backend, but it laid the foundations for my understanding 
          of MVC .NET. After this I began working on my own doing small fixes, such 
          as sql updates, basic input validation, and just general bug fixes. As I 
          progressed, I started working on more complicated projects, such as creating 
          new database tables and data access functionality, adding a comment section 
          to one page, a new table or column to another, and improving performance on
           poorly designed pages. All of the skills I built doing this came together 
           to help me with my final pinnacle project at Pilot. I fully designed two 
           new web pages for their invoice tracking site. This involved creating the
            database tables, data access layer, mid-end controllers, services, the 
            two pages, extensive input validation and user functionality to insert, 
            add, update, and delete sets and the suppliers they contained. As a result,
             I gained key knowledge into both web architecture from the ground up and an
              incredible set of problem solving skills.
        </p>
        <p>
          While doing website development for an oil company isn't exactly a computer 
          scientist's dream come true, I wouldn't trade my time here for anything as 
          I still utilize many of the skills I learned here today. 
        </p>
      </div>
    </div>
  )
}
