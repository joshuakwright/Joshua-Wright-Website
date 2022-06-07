import React from 'react'
import './SideBar.css'
import { useNavigate } from 'react-router'

export default function SideBar(array) {
  let navigate = useNavigate();

  function createElements(array) {
    return array.map((page) => <button className='buttons' key={page.org} onClick={() => {
        navigate(page.url);
        }}>{page.org}</button>)
  }
  
  return (
    <div className='side-bar'>
        {createElements(array)}
    </div>
  )
}