import React from 'react'
import HeaderButtons from './HeaderButtons/HeaderButtons'
import './HeaderBar.css'

export default function HeaderBar() {
  return (
    <header className='menu-bar'>
        <HeaderButtons />
        <div>
            <span className='my-name'>JOSHUA WRIGHT</span>
        </div>
    </header>
  )
}
