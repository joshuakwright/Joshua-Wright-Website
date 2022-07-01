import React from 'react'
import './ContactMe.css'
import HeaderBar from './../HeaderBar/HeaderBar'
import YosemiteAndMe from './YosemiteAndMe.jpg'

export default function ContactMe() {
  return (
    <div>
        <HeaderBar />
        <img src={YosemiteAndMe} className='yosemiteandme' alt="Missing" />
        <b>
            <dl className='info'>
                <dt className='section-title'>Contact Info: </dt>
                <dd>-  Email: mrjoshuakwright@gmail.com</dd>
                <dd>-  Phone Number: 615-337-0329</dd>

                <dt className='section-title'>Social Media: </dt>
                <dd>-  LinkedIn: <a href='https://linkedin.com/in/joshua-w-307983124'>linkedin.com/in/joshua-w-307983124</a></dd>
                <dd>-  Instagram: josh_dub</dd>

                <dt className='section-title'>My Code: </dt>
                <dd>-  Github: <a href="https://github.com/joshuakwright">github.com/joshuakwright</a></dd>
            </dl>
        </b>
    </div>
  )
}
