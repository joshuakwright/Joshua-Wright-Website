import React from 'react'
import './HeaderButtons.css'
import { useNavigate } from "react-router-dom"


export default function HeaderButtons() {
  let navigate = useNavigate();

  return (
    <div className='header'>
      <button className='page-link' onClick={() => {
        navigate('/');
        }}>Home</button>

      <button className='page-link' onClick={() => {
        navigate('/proexp');
        }}>Professional Experience</button>

      <button className='page-link' onClick={() => {
        navigate('/education');
        }}>Education</button>

      <button className='page-link' onClick={() => {
        navigate('/projects');
        }}>Projects</button>

      <button className='page-link' onClick={() => {
        navigate('/myresume');
        }}>My Resume</button>
    </div>
  )
}
