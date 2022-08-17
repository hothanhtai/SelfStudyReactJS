import React, { useState } from 'react'

import "./Navbar.css"

const Navbar = () => {
  const [isHamDropActive, setHamDropActive] =useState(false)
  const navItems =  <>
    <a href="#">Products</a>
    <a href="#">Story</a>
    <a href="#">Manufacturing</a>
    <a href="#">Packaging</a>
  </>
  const navIcons = <>
    <a href="#">
      <img src="images/icons/basket.png" alt="" />
    </a>
    <a href="#">
      <img src="images/icons/person.png" alt="" />
    </a>
  </>
  const searchBar  = <div className='navbar-search'>
    <img src='images/icons/search.png' alt='search'/>
    <input className='navbar-search-input' placeholder='Search here' type='text' />
  </div>
  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <img src="images/logo.png" alt="logo" />
        </div>
        <div className='navbar-search-container'>
          {searchBar}
        </div>
        <div className='hamburger-container'>
            <div className= {isHamDropActive ? 'hamburger close-hamburger': 'hamburger open-hamburger'}
                  onClick={() => setHamDropActive(!isHamDropActive)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={isHamDropActive
                    ? 'hamburger-drop-down hamburger-dropdown-active' 
                    :'hamburger-drop-down'
                    
              }>
              {searchBar}
              {navItems}
              <div className="hamburger-drop-icons">{navIcons}</div>
            </div>
        </div>
        <div className='nav-items'>
            {navItems}
            {navIcons}
        </div>
    </div>
  )
  
}

export default Navbar