import React from 'react'
import "./Nav.css"

import {useState} from "react"

function Nav() {
    const [showLink,setShowLink] = useState(false)

    const handleShowLink = ()=>{
        setShowLink(!showLink);
    }

  return (
    <nav className={`navbar ${showLink ?"show-nav" : "show-hidden "} `}>
        <div className='navbar__logo'>
            Logo
        </div>
        <ul className='navbar__links'>
            <li className='navbar__item slideInDown-1'>
                <a href="" className='navbar__link'>Accueil</a>
            </li>
            <li className='navbar__item slideInDown-2'>
                <a href="" className='navbar__link'>Portfolio</a>
            </li>
            <li className='navbar__item slideInDown-3'>
                <a href="" className='navbar__link'>Services</a>
            </li>
            <li className='navbar__item slideInDown-4'>
                <a href="" className='navbar__link'>A propos</a>
            </li>
            <li className='navbar__item slideInDown-5'>
                <a href="" className='navbar__link'>Contact</a>
            </li>
        </ul>
        <button className='navbar__burger' onClick={handleShowLink}>
            <span className='burger-bar'></span>
        </button>
    </nav>
  )
}

export default Nav